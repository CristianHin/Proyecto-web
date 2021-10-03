import { Fragment } from "react";
import { Link } from "react-router-dom";
import NavigationMenu from "../includes/NavigationMenu";
import './Productos.css';

const Productos = () => {

    return(
        <Fragment>
            <section className="container">
                <div className="one">
                    <div className="header">
                        <h2>Listado de productos</h2>
                       
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Id producto</th>
                                <th>Nombre de producto</th>
                                <th>Cantidad de productos</th>
                                <th className="IVA">IVA</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Aviones de juguete</td>
                                <td>20u</td>
                                <td className="IVA">Aplica</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Reloj</td>
                                <td>12u</td>
                                <td className="IVA">Aplica</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Horno Microondas</td>
                                <td>25u</td>
                                <td className="IVA">Aplica</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Aguacates</td>
                                <td>12u</td>
                                <td className="IVA">Aplica</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Celular</td>
                                <td>Agotado</td>
                                <td className="IVA">Aplica</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Computador Portatil</td>
                                <td>10u</td>
                                <td className="IVA">Aplica</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Impresoras</td>
                                <td>8u</td>
                                <td className="IVA">Aplica</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Kit de limpieza Hogar</td>
                                <td>25u</td>
                                <td className="IVA">Aplica</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="two">
                    <h2>Administrar Productos</h2>
                    <div className="addProduct">
                        <span>Agrega tus productos</span>
                        <Link to="/Productos/Agragar" className="agregar">
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
                                    <th className="IVA">IVA</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Aviones de juguete</td>
                                    <td>20u</td>
                                    <td className="IVA">Aplica</td>
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
                                    <th className="IVA">IVA</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Aviones de juguete</td>
                                    <td>20u</td>
                                    <td className="IVA">Aplica</td>
                                </tr>
                            </tbody>
                        </table>
                        <Link to="#" className="editar">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                            Editar                   
                        </Link>
                        <button type="button" className="eliminar">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                            Eliminar
                        </button>
                        

                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Productos;