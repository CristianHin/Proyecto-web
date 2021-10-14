import ProductContext from "../../context/productos/ProductContext";
import { Fragment, useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Alert from "../includes/Alert";
import './ListadoProductos.css';
import axios from 'axios';

const Productos = () => {

    //Extraer productos del state inicial
    const productsContext = useContext(ProductContext);

    const { products, alert, getProducts } = productsContext;

    const [optionFilter, setOptionFilter] = useState('id');
    const [filter, setFilter] = useState('');
    
    //Obtener productos cuando cargue el componente
    useEffect(() => {
        const consultAPI = async () => {
            const url = 'http://localhost:8080/api/productos';
    
            const results = await axios.get(url);

            getProducts(results.data.products);
        }

        consultAPI();
    }, []);

    //Obtener productos cuando el valor del input o select del filtro cambien
    useEffect(() => {
        const consultAPI = async (fil, opt) => {
            const url = `http://localhost:8080/api/productos?${opt}=${fil}`;
            
            const results = await axios.get(url);

            getProducts(results.data.products);
        };

        consultAPI(filter, optionFilter);
    }, [filter, optionFilter]);

    const onChangeSelect = e => {
        setOptionFilter(e.target.value);
    };

    const onChangeFilter = e => {
        setFilter(e.target.value);
    };

    return ( 
        <Fragment>
            {
                alert
                ? 
                    <Alert 
                        alertType="success"
                        alertHeader="¡Guardado!" 
                        alertBody="El registro ha sido agregado con éxito." 
                    />
                :
                    null
            }
            <section className="main-container">
                <div className="cards">
                    <div className="card card-caption">
                        <div className="card-caption-title">
                            <h2>Módulo de productos</h2>
                            <Link to="/productos/agregar" className="button button-new">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                Nuevo producto
                            </Link>
                        </div>   
                        <p>
                            En esta sección usted podrá visualizar el listado de productos del sistema,
                            con la posibilidad de filtrarlos según el campo que seleccione. También 
                            tendrá la opción de agregar un nuevo producto o de actualizar los ya existentes.
                        </p>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h3>Información general</h3>
                            <div className="input-group">
                                {/* <select>
                                    <option>5</option>
                                    <option>10</option>
                                    <option>25</option>
                                </select> */}
                                <select id="option-filter" name="option-filter" onChange={ onChangeSelect }>
                                    <option value="id">ID Producto</option>
                                    <option value="description">Descripción Producto</option>
                                </select>
                                <input type="search" placeholder="Buscar..." onChange={ onChangeFilter }></input>
                            </div>    
                        </div>
                        <div className="card-body">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nombre</th>
                                        <th colSpan="2">Descripción</th>
                                        <th>Stock (P/U)</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        products.length > 0
                                        ?
                                            products.map(product => {
                                                return (
                                                    <tr key={ product._id }>
                                                        <td>{ product._id }</td>
                                                        <td>{ product.name }</td>
                                                        <td colSpan="2">{ product.description }</td>
                                                        <td>{ product.stock }</td>
                                                        <td className="action">
                                                            <Link to="/productos/editar" className="editar">
                                                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>   
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        :
                                            <tr>
                                                <td colSpan="5">No hay productos registrados en el sistema</td>
                                            </tr>
                                    }
                                </tbody>
                            </table>
                            {/* <div className="pagination">
                                Mostrando de 1 a 8 de 100 entradas 
                                <div className="pagination-links">
                                    <a href="#" className="button button-pagination">Anterior</a>
                                    <a href="#" className="button button-pagination">Siguiente</a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h3>Vista Previa de Producto</h3>
                            <a href="#" className="button button-show">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                Ver más</a>
                        </div>
                        <div className="card-body">
                            <h3 className="label-info">Marca</h3>
                            <p className="content-info">Sony</p>
                            <h3 className="label-info">Dimensiones</h3>
                            <p className="content-info">130x86 (cm)</p>
                            <h3 className="label-info">Peso</h3>
                            <p className="content-info">1000 gr</p>
                            <h3 className="label-info">Iva</h3>
                            <p className="content-info">Aplica</p>
                            <h3 className="label-info">Precio</h3>
                            <p className="content-info">$1.800.000</p>
                        </div>
                    </div>
                    {/* <div className="card">
                        <h2>Administrar Productos</h2>
                        <div className="addProduct">
                            <span>Agrega tus productos</span>
                            <Link to="/productos/agregar" className="agregar">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                                Agregar                     
                            </Link>

                        </div>
                        <div className="findProduct">
                            <h4>busca el producto que necesites</h4>
                            <div className="input-group">
                                
                                <select>
                                    <option>ID Producto</option>
                                    <option>Nombre del producto</option>
                                </select>
                                <input type="search" placeholder="Buscar..."></input>
                                <button>
                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                    Buscar
                                </button>
                            </div>

                            <table>

                                <thead>
                                    <tr>
                                        <th>Id </th>
                                        <th>Descripción</th>
                                        <th>Cantidad</th>
                                        <th>IVA</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Aviones de juguete</td>
                                        <td>20u</td>
                                        <td>Aplica</td>
                                    </tr>
                                </tbody>
                            </table>
                            

                        </div>
                        <div className="editProduct">
                            <h4>Edita o elimina productos</h4>
                            <div className="input-group">
                                
                                <select>
                                    <option>ID Producto</option>
                                    <option>Nombre del producto</option>
                                </select>
                                <input type="search" placeholder="Buscar..."></input>
                                <button>
                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                    Buscar
                                </button>
                            </div>
                            <table>

                                <thead>
                                    <tr>
                                        <th>Id </th>
                                        <th>Descripción</th>
                                        <th>Cantidad</th>
                                        <th>IVA</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Aviones de juguete</td>
                                        <td>20u</td>
                                        <td>Aplica</td>
                                    </tr>
                                </tbody>
                            </table>
                            <Link to="/productos/editar" className="editar">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                                Editar                   
                            </Link>
                            <button type="button" className="eliminar">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                Eliminar
                            </button>
                        </div>
                    </div> */}
                </div>
            </section>
        </Fragment>
    )
}

export default Productos;