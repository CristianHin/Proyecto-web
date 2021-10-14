import ProductContext from '../../context/productos/ProductContext';
import { useHistory } from 'react-router-dom';
import { useState, useContext, useEffect, Fragment } from 'react';
import Alert from '../includes/Alert';
import './AgregarProducto.css'
import axios from 'axios';

const AgregarProducto = () => {

    //Extraer productos del state inicial
    const productsContext = useContext(ProductContext);

    const { products, errorform, getProducts, showAlert, showError, closeAlert } = productsContext;

    const [product, setProduct] = useState({
        _id: '',
        name: '',
        brand: '',
        price: '',
        iva: '',
        stock: '',
        description: ''
    });

    const { _id, name, brand, price, iva, stock, description } = product; 

    useEffect(() => {
        if (errorform) {
            setTimeout(() => {
                closeAlert();
            }, 5000);
        }
    }, [errorform]);

    let history = useHistory();

    const changeProduct = e => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    };

    const submitProduct = e => {
        e.preventDefault();

        //Validar formulario
        if (_id.trim() === '' || name.trim() === '' || brand.trim() === '' || price.trim() === ''
            || iva.trim() === '' || stock.trim() === '' || description.trim() === '') {
            return showError();
        }

        //Crear producto
        axios.post('http://localhost:8080/api/productos', product)
            .then(res => {
                showAlert();
                history.push({
                    pathname: '/productos',
                    state: 'create'
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

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
                        <form method="POST" onSubmit={ submitProduct }>
                            <div className="card-header">
                                <h3>Registro de Producto</h3>
                            </div>
                            <div className="card-body"> 
                                <h3 className="label-info">Información general</h3>
                                <div className="form-section">
                                    <div className="form-group">
                                        <label htmlFor="_id">ID Producto</label>
                                        <input 
                                            type="text" 
                                            id="_id" 
                                            name="_id" 
                                            onChange={ changeProduct }
                                            value={ _id }
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="brand">Marca</label>
                                        <input 
                                            type="text" 
                                            id="brand" 
                                            name="brand" 
                                            onChange={ changeProduct } 
                                            value={ brand }
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Nombre</label>
                                        <input 
                                            type="text" 
                                            id="name" 
                                            name="name" 
                                            onChange={ changeProduct }
                                            value={ name }
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="price">Precio Unitario <small>($)</small></label>
                                        <input 
                                            type="number" 
                                            id="price" 
                                            name="price" 
                                            onChange={ changeProduct }
                                            value={ price } 
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="iva">IVA</label>
                                        <select 
                                            id="iva" 
                                            name="iva" 
                                            onChange={ changeProduct } 
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
                                            value={ stock }
                                        />
                                    </div>
                                    <div className="form-group two-columns">
                                        <label htmlFor="description">Descripción</label>
                                        <textarea 
                                            rows="5" 
                                            id="description" 
                                            name="description" 
                                            onChange={ changeProduct }
                                            defaultValue={ description }
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="card-footer">
                                <button type="submit" className="button button-new">
                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path></svg>
                                    Guardar Producto
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}
 
export default AgregarProducto;