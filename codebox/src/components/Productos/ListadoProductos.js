import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Alert from "../includes/Alert";
import './ListadoProductos.css';

const Productos = () => {

    const [showAlert, setShowAlert] = useState(true);

    return ( 
        <Fragment>
           
            {
                showAlert
                ? 
                    <Alert 
                        showAlert = { showAlert }
                        setShowAlert = { setShowAlert }
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
                                <select>
                                    <option>5</option>
                                    <option>10</option>
                                    <option>25</option>
                                </select>
                                <select>
                                    <option>ID Producto</option>
                                    <option>Descripción Producto</option>
                                </select>
                                <input type="search" placeholder="Buscar..."></input>
                            </div>    
                        </div>
                        <div className="card-body">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nombre</th>
                                        <th>Descripción</th>
                                        <th>Stock (P/U)</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>JUG-023</td>
                                        <td>Aviones de juguete</td>
                                        <td>Avión blanco con negro pequeño</td>
                                        <td>20</td>
                                        <td className="action">
                                            <Link to="/productos/editar" className="editar">
                                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>   
                                            </Link>
                                            <button type="button" className="eliminar">
                                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>ACC-064</td>
                                        <td>Reloj</td>
                                        <td>Reloj de pulso marrón</td>
                                        <td>12</td>
                                        <td className="action">
                                            <Link to="/productos/editar" className="editar">
                                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>   
                                            </Link>
                                            <button type="button" className="eliminar">
                                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>ELE-12</td>
                                        <td>Horno Microondas</td>
                                        <td>Microondas eléctrico color gris</td>
                                        <td>25</td>
                                        <td className="action">
                                            <Link to="/productos/editar" className="editar">
                                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>   
                                            </Link>
                                            <button type="button" className="eliminar">
                                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>COM-983</td>
                                        <td>Aguacates</td>
                                        <td>Aguacate serrano</td>
                                        <td>12</td>
                                        <td className="action">
                                            <Link to="/productos/editar" className="editar">
                                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>   
                                            </Link>
                                            <button type="button" className="eliminar">
                                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>TEC-54</td>
                                        <td>Celular</td>
                                        <td>Smartphone android 2gb ram</td>
                                        <td>0</td>
                                        <td className="action">
                                            <Link to="/productos/editar" className="editar">
                                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>   
                                            </Link>
                                            <button type="button" className="eliminar">
                                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>TEC-21</td>
                                        <td>Computador Portatil</td>
                                        <td>PC intel i7, ssd de 512gb y 8gb de ram</td>
                                        <td>10</td>
                                        <td className="action">
                                            <Link to="/productos/editar" className="editar">
                                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>   
                                            </Link>
                                            <button type="button" className="eliminar">
                                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>TEC-89</td>
                                        <td>Impresoras</td>
                                        <td>Impresora láser, escáner y fotocopiadora</td>
                                        <td>8</td>
                                        <td className="action">
                                            <Link to="/productos/editar" className="editar">
                                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>   
                                            </Link>
                                            <button type="button" className="eliminar">
                                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>HOG-03</td>
                                        <td>Kit de limpieza Hogar</td>
                                        <td>Detergente, brillador y esponja</td>
                                        <td>25</td>
                                        <td className="action">
                                            <Link to="/productos/editar" className="editar">
                                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>   
                                            </Link>
                                            <button type="button" className="eliminar">
                                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="pagination">
                                Mostrando de 1 a 8 de 100 entradas 
                                <div className="pagination-links">
                                    <a href="#" className="button button-pagination">Anterior</a>
                                    <a href="#" className="button button-pagination">Siguiente</a>
                                </div>
                            </div>
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