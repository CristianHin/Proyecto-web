import ProductContext from "../../context/productos/ProductContext";
import { Fragment, useState, useEffect, useContext } from 'react';
import AlertContext from '../../context/alerts/AlertContext';
import { useHistory } from 'react-router-dom';
import Alert from '../includes/Alert';
import axios from "axios";
import './CrearVenta.css';

const CrearVenta = () => {

    //Extraer productos del state inicial
    const productsContext = useContext(ProductContext);
    const { products, getProducts } = productsContext;

    const alertsContext = useContext(AlertContext);
    const { errorform, showAlert, showError, closeAlert } = alertsContext;

    //Obtener productos cuando cargue el componente
    useEffect(() => {
        const consultAPI = async () => {
            const url = 'http://localhost:8080/api/productos';
    
            const results = await axios.get(url);

            getProducts(results.data.products);
        }

        consultAPI();
    }, []);

    useEffect(() => {
        if (errorform) {
            setTimeout(() => {
                closeAlert();
            }, 5000);
        }
    }, [errorform]);

    let history = useHistory();

    const [purchase, setPurchase] = useState({
        _id: '',
        date: '',
        total: '',
        status: '',
        client_id: '',
        client_name: '',
    });

    const { _id, date, total, status, client_id, client_name } = purchase;
    
    const [productTmp, setProductTmp] = useState({
        product_id: '',
        product_price: '',
        product_quantity: '',
    });

    const { product_id, product_price, product_quantity } = productTmp;
    
    const [productsPurchased, setProductsPurchased] = useState([]);

    //EVENTOS

    const changePurchase = e => {
        setPurchase({
            ...purchase,
            [e.target.name]: e.target.value
        });
    };

    const changeProduct = e => {
        setProductTmp({
            ...productTmp,
            [e.target.name]: e.target.value
        });
    }

    const addProduct = () => {
        
        if (product_id.trim() === '' || product_price.trim() === '' || product_quantity.trim() === '') {
            return alert('El id, el precio y la cantidad del producto son requeridos');
        }

        let result = products.filter(product => product._id == product_id);

        if (result.length === 0) {
            return alert('No hay productos con este id');
        }

        setProductTmp({
            product_id: product_id,
            product_price: product_price,
            product_quantity: product_quantity,
        });

        setProductsPurchased([
            ...productsPurchased,
            productTmp
        ]);

        setProductTmp({
            product_id: '',
            product_price: '',
            product_quantity: '',
        });
    };

    const submitPurchase = e => {
        e.preventDefault();

        //Validar formulario
        if (_id.trim() === '' || date.trim() === '' || total.trim() === '' || status.trim() === '' 
            || client_id.trim() === '' || client_name.trim() === '' || productsPurchased.length === 0) {
            return showError();
        }

        let purchaseFinal = { ...purchase, products: productsPurchased};

        //Crear venta
        axios.post('http://localhost:8080/api/ventas', purchaseFinal)
            .then(res => {
                showAlert();
                history.push({
                    pathname: '/ventas',
                    state: 'create'
                });
            })
            .catch(err => {
                console.log(err);
            });
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
                        <form method="POST" onSubmit={ submitPurchase }>
                            <div className="card-header">
                                <h3>Registro de venta</h3>
                            </div>
                            <div className="card-body"> 
                                <h3 className="label-info">Información general</h3>
                                <div className="form-section">
                                    <div className="form-group">
                                        <label htmlFor="_id">ID Venta</label>
                                        <input 
                                            type="text" 
                                            id="_id" 
                                            name="_id" 
                                            onChange={ changePurchase }
                                            value={ _id }
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="date">Fecha</label>
                                        <input 
                                            type="date" 
                                            id="date" 
                                            name="date" 
                                            onChange={ changePurchase }
                                            value={ date }
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="total">Valor total</label>
                                        <input 
                                            type="number" 
                                            id="total" 
                                            name="total" 
                                            onChange={ changePurchase }
                                            value={ total }
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="status">Estado</label>
                                        <select 
                                            id="status" 
                                            name="status" 
                                            onChange={ changePurchase }
                                        >
                                            <option>--SELECCIONE UNA OPCIÓN--</option>
                                            <option value="en proceso">En proceso</option>
                                            <option value="entregada">Entregada</option>
                                            <option value="cancelada">Cancelada</option>
                                        </select>
                                    </div>
                                </div>
                                <h3 className="label-info">Información del cliente</h3>
                                <div className="form-section">
                                    <div className="form-group">
                                        <label htmlFor="client_id">ID Cliente</label>
                                        <input 
                                            type="text" 
                                            id="client_id" 
                                            name="client_id" 
                                            onChange={ changePurchase }
                                            value={ client_id }
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="client_name">Nombre</label>
                                        <input 
                                            type="text" 
                                            id="client_name" 
                                            name="client_name" 
                                            onChange={ changePurchase }
                                            value={ client_name }
                                        />
                                    </div>
                                </div>
                                <h3 className="label-info">Información de productos</h3>
                                <div className="form-section">
                                    <div className="form-group">
                                        <label htmlFor="product_id">ID producto</label>
                                        <input 
                                            type="text" 
                                            id="product_id" 
                                            name="product_id" 
                                            onChange={ changeProduct }
                                            value={ product_id }
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="product_quantity">Cantidad</label>
                                        <input 
                                            type="number" 
                                            id="product_quantity" 
                                            name="product_quantity" 
                                            onChange={ changeProduct }
                                            value={ product_quantity }
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="product_price">Precio unitario</label>
                                        <input 
                                            type="number" 
                                            id="product_price" 
                                            name="product_price" 
                                            onChange={ changeProduct }
                                            value={ product_price }
                                        />
                                    </div>
                                    <div className="form-group">
                                        <button 
                                            type="button" 
                                            className="button button-add"
                                            onClick={ addProduct }
                                        >
                                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                                            Agregar
                                        </button>
                                    </div>
                                </div>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Cantidad</th>
                                            <th>Precio</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            productsPurchased.length === 0 
                                            ?
                                                <tr>
                                                    <td colSpan="4" className="empty">
                                                        Sin productos agregados
                                                    </td>  
                                                </tr>
                                            :
                                            productsPurchased.map(product => {
                                                return (
                                                    <tr key={ product.product_id }>
                                                        <td>{ product.product_id }</td>
                                                        <td>{ product.product_quantity }</td>
                                                        <td>{ product.product_price }</td>
                                                        <td>
                                                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <hr />
                            <div className="card-footer">
                                <button type="submit" className="button button-new">
                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path></svg>
                                    Guardar Venta
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}
 
export default CrearVenta;