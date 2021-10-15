import ProductContext from '../../context/productos/ProductContext';
import { Fragment, useState, useContext, useEffect } from 'react';
import AlertContext from "../../context/alerts/AlertContext";
import { useHistory } from 'react-router-dom';
import Alert from '../includes/Alert';
import './AgregarProducto.css';
import axios from 'axios';

const EditarProducto = (props) => {

    //HOOKS AND DESTRUCTURING
    const productsContext = useContext(ProductContext);
    const { addProduct } = productsContext;

    const alertsContext = useContext(AlertContext);
    const { errorform, showAlert, closeAlert, showError } = alertsContext;
    
    const { _id, name, brand, price, iva, stock, description } = props.location.state;

    const [product, setProduct] = useState({
        name: name,
        brand: brand,
        price: price.toString(),
        iva: iva.toString(),
        stock: stock.toString(),
        description: description
    });

    useEffect(() => {
        if (errorform) {
            setTimeout(() => {
                closeAlert();
            }, 5000);
        }
    }, [errorform]);

    let history = useHistory();

    //EVENTOS
    const changeProduct = e => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    };

    const updateProduct = e => {
        e.preventDefault();

        //Validar formulario
        if (product.name.trim() === '' || product.brand.trim() === '' || product.price.trim() === ''
            || product.iva.trim() === '' || product.stock.trim() === '' || product.description.trim() === '') {
            return showError();
        }

        //Actualizar producto
        axios.patch(`http://localhost:8080/api/productos/${_id}`, product)
            .then(res => {
                showAlert();
                history.push({
                    pathname: '/productos',
                    state: 'update'
                });
            })
            .catch(err => {
                console.log(err);
            });

        addProduct();
    };

    return (
        <Fragment>
            {
                errorform
                ?
                    <Alert alertType="cancel" alertHeader="¡Error!" alertBody="Todos los campos son requeridos" />
                :
                    ''
            }
            <section className="main-container">
                <div className="cards">
                    <div className="card">
                        <form method="POST" onSubmit={ updateProduct }>
                            <div className="card-header">
                                <h3>Editar Producto</h3>
                            </div>
                            <div className="card-body"> 
                                <h3 className="label-info">Información general</h3>
                                <div className="form-section">
                                    <div className="form-group">
                                        <label htmlFor="brand">Marca</label>
                                        <input 
                                            type="text" 
                                            id="brand" 
                                            name="brand"
                                            onChange={ changeProduct }
                                            value={ product.brand }
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Nombre</label>
                                        <input 
                                            type="text" 
                                            id="name" 
                                            name="name"
                                            onChange={ changeProduct }
                                            value={ product.name }    
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="price">Precio Unitario <small>($)</small></label>
                                        <input 
                                            type="number" 
                                            id="price" 
                                            name="price"
                                            onChange={ changeProduct }
                                            value={ product.price }
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="iva">IVA</label>
                                        <select 
                                            id="iva" 
                                            name="iva" 
                                            onChange={ changeProduct }
                                            defaultValue={ product.iva === 'true' ? true : false }
                                        >
                                            <option>--SELECCIONE UNA OPCIÓN--</option>
                                            <option value="true">Aplica</option>
                                            <option value="false">No aplica</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="stock">Stock <small>(cantidad)</small></label>
                                        <input 
                                            type="number" 
                                            id="stock" 
                                            name="stock"
                                            onChange={ changeProduct }
                                            value={ product.stock }
                                        />
                                    </div>
                                    <div className="form-group two-columns">
                                        <label htmlFor="description">Descripción</label>
                                        <textarea 
                                            rows="5" 
                                            id="description" 
                                            name="description"
                                            onChange={ changeProduct }
                                            defaultValue={ product.description }
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="card-footer">
                                <button type="submit" className="button button-new">
                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path></svg>
                                    Guardar cambios
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}
 
export default EditarProducto;