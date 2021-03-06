import ProductContext from "../../context/productos/ProductContext";
import { Fragment, useState, useContext, useEffect } from 'react';
import AlertContext from "../../context/alerts/AlertContext";
import { useHistory } from 'react-router-dom';
import clientAxios from '../../config/axios';
import Alert from '../includes/Alert';

const EditarVenta = (props) => {

    //Extraer productos del state inicial
    const productsContext = useContext(ProductContext);
    const { products, getProducts } = productsContext;

    const alertsContext = useContext(AlertContext);
    const { alert, showAlert, closeAlert } = alertsContext;
    
    const { _id, date, total, status, client_id, client_name } = props.location.state;
    
    useEffect(() => {
        setProductsPurchased([
            ...props.location.state.products
        ]);

        const consultAPI = async () => {
            //const url = 'https://code-box-api.herokuapp.com/api/productos';
    
            const results = await clientAxios.get('/productos');

            getProducts(results.data.products);
        }

        consultAPI();
    }, []);
    
    useEffect(() => {
        let timer = setTimeout(() => {
            closeAlert();
        }, 5000);

        return () => {
            clearTimeout(timer);
        };
    }, [alert]);

    const [productTmp, setProductTmp] = useState({
        product_id: '',
        product_price: '',
        product_quantity: '',
    });

    const { product_id, product_price, product_quantity } = productTmp;
    
    const [productsPurchased, setProductsPurchased] = useState([]);

    const [edit, setEdit] = useState(false);

    const [purchase, setPurchase] = useState({
        date: date.substring(0, 10),
        total: total.toString(),
        status: status,
        client_id: client_id.toString(),
        client_name: client_name,
    });

    let history = useHistory();

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
            closeAlert();
            return showAlert('cancel', '??Error!', 'El id, el precio y la cantidad son requeridos');
            //return alert('El id, el precio y la cantidad del producto son requeridos');
        }

        let result = products.filter(product => product._id == product_id);

        if (result.length === 0) {
            closeAlert();
            return showAlert('cancel', '??Error!', 'No existe un producto con este id');
            //return alert('No hay productos con este id');
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

    const deleteProduct = (id, e) => {
        let newProducts = productsPurchased.filter(product => product.product_id != id);
        setProductsPurchased([
            ...newProducts
        ]);
        //En caso de que el producto a editar sea eliminado limpiamos el estado y cambiamos el bot??n
        if (id === productTmp.product_id) {
            //Limpiamos el estado del producto temporal
            setProductTmp({
                product_id: '',
                product_price: '',
                product_quantity: '',
            });
            //Cambiamos el bot??n
            setEdit(false);
        }
    };

    const fillForm = (id, e) => {
        //Obtenemos el producto a editar
        let result = productsPurchased.filter(product => product.product_id == id);
        //Aplicamos destructuring al array resultado
        const [ productEdit ] = result;
        //Llenamos el state con la informaci??n del producto
        setProductTmp(productEdit);
        //Cambiamos el bot??n
        setEdit(true);
    };

    const editProduct = () => {
        //Actualizamos el producto
        setProductsPurchased(
            productsPurchased.map(product => product.product_id === productTmp.product_id ? productTmp : product)
        );
        //Limpiamos el estado del producto temporal
        setProductTmp({
            product_id: '',
            product_price: '',
            product_quantity: '',
        });
        //Cambiamos el bot??n
        setEdit(false);
    };

    const updatePurchase = e => {
        e.preventDefault();

        //Validar formulario
        if (purchase.date.trim() === '' || purchase.total.trim() === '' || purchase.status.trim() === '' 
            || purchase.client_id.trim() === '' || purchase.client_name.trim() === '' || productsPurchased.length === 0) {
            closeAlert();
            return showAlert('cancel', '??Error!', 'Todos los campos son requeridos');
        }

        let purchaseFinal = { ...purchase, products: productsPurchased};

        //Actualizar venta
        clientAxios.patch('/ventas/' + _id, purchaseFinal)
            .then(res => {
                showAlert('success', '??Guardado!', 'Los cambios se han guardado con ??xito');
                history.push({
                    pathname: '/ventas'
                });
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <Fragment>
            {
                alert
                ?
                    <Alert alertType={ alert.type } alertHeader={ alert.title } alertBody={ alert.msg } />
                :
                    ''
            }
            <section className="main-container">
                <div className="cards">
                    <div className="card">
                        <form method="POST" onSubmit={ updatePurchase }>
                            <div className="card-header">
                                <h3>Editar Venta</h3>
                            </div>
                            <div className="card-body"> 
                                <h3 className="label-info">Informaci??n general</h3>
                                <div className="form-section">
                                    <div className="form-group">
                                        <label htmlFor="date">Fecha</label>
                                        <input 
                                            type="date" 
                                            id="date" 
                                            name="date"
                                            onChange={ changePurchase }
                                            value={ purchase.date }
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="total">Valor total</label>
                                        <input 
                                            type="number" 
                                            id="total" 
                                            name="total"
                                            onChange={ changePurchase }
                                            value={ purchase.total }
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="status">Estado</label>
                                        <select 
                                            id="status" 
                                            name="status"
                                            onChange={ changePurchase }
                                            defaultValue={ purchase.status == 'en proceso' ? 'en proceso' : purchase.status === 'entregada' ? 'entregada' : 'cancelada' }
                                        >
                                            <option>--SELECCIONE UNA OPCI??N--</option>
                                            <option value="en proceso">En proceso</option>
                                            <option value="entregada">Entregada</option>
                                            <option value="cancelada">Cancelada</option>
                                        </select>
                                    </div>
                                </div>
                                <h3 className="label-info">Informaci??n del cliente</h3>
                                <div className="form-section">
                                    <div className="form-group">
                                        <label htmlFor="client_id">ID Cliente</label>
                                        <input 
                                            type="text" 
                                            id="client_id" 
                                            name="client_id" 
                                            onChange={ changePurchase }
                                            value={ purchase.client_id }
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="client_name">Nombre</label>
                                        <input 
                                            type="text" 
                                            id="client_name" 
                                            name="client_name"
                                            onChange={ changePurchase }
                                            value={ purchase.client_name }
                                        />
                                    </div>
                                </div>
                                <h3 className="label-info">Informaci??n de productos</h3>
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
                                        {
                                            edit
                                            ?
                                                <button 
                                                    type="button" 
                                                    className="button button-show"
                                                    onClick={ editProduct }
                                                >
                                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                                    Editar
                                                </button>
                                            :    
                                            <button 
                                                type="button" 
                                                className="button button-add"
                                                onClick={ addProduct }
                                            >
                                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                Agregar
                                            </button>
                                        }
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
                                                        <td className="action">
                                                            <button 
                                                                type="button" 
                                                                onClick={(e) => fillForm(product.product_id, e)} 
                                                                className="editar"
                                                            >
                                                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                                                            </button>
                                                            <button 
                                                                type="button" 
                                                                onClick={(e) => deleteProduct(product.product_id, e)} 
                                                                className="eliminar"
                                                            >
                                                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                                            </button>
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
                                    Guardar cambios
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default EditarVenta