import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Alert from "../includes/Alert";
import './ListadoUsuarios.css';

const ListadoUsuarios = () => {
    
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
                            <h2>Módulo de usuarios</h2>
                        </div>   
                        <p>
                            En esta sección usted podrá visualizar el listado de usuarios del sistema,
                            con la posibilidad de filtrarlas según el campo que seleccione. También 
                            podrá actualizar el rol y estado de los ya existentes.
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
                                    <option>ID Usuario</option>
                                    <option>Nombre</option>
                                    <option>Rol</option>
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
                                        <th>Rol</th>
                                        <th>Estado</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>123456789</td>
                                        <td>Carlos Gomez</td>
                                        <td>Administrador</td>
                                        <td>
                                            <span className="tag-status cancelled">Inactivo</span>
                                        </td>
                                        <td className="action">
                                            <Link to="/usuarios/editar" className="editar">
                                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                                            </Link>
                                            <button type="button" className="eliminar">
                                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>987654321</td>
                                        <td>Andrés Cardona</td>
                                        <td>Vendedor</td>
                                        <td>
                                            <span className="tag-status paid">Activo</span>
                                        </td>
                                        <td className="action">
                                            <Link to="/usuarios/editar" className="editar">
                                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>    
                                            </Link>
                                            <button type="button" className="eliminar">
                                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>135792468</td>
                                        <td>Tatiana Rincón</td>
                                        <td>Administrador</td>
                                        <td>
                                            <span className="tag-status paid">Activo</span>
                                        </td>
                                        <td className="action">
                                            <Link to="/usuarios/editar" className="editar">
                                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>  
                                            </Link>
                                            <button type="button" className="eliminar">
                                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>246813579</td>
                                        <td>Samuel Zapata</td>
                                        <td>Administrador</td>
                                        <td>
                                            <span className="tag-status cancelled">Inactivo</span>
                                        </td>
                                        <td className="action">
                                            <Link to="/usuarios/editar" className="editar">
                                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg> 
                                            </Link>
                                            <button type="button" className="eliminar">
                                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>975318642</td>
                                        <td>Juan Molina</td>
                                        <td>Vendedor</td>
                                        <td>
                                            <span className="tag-status paid">Activo</span>
                                        </td>
                                        <td className="action">
                                            <Link to="/usuarios/editar" className="editar">
                                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>   
                                            </Link>
                                            <button type="button" className="eliminar">
                                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>864297531</td>
                                        <td>Carolina García</td>
                                        <td>Vendedor</td>
                                        <td>
                                            <span className="tag-status paid">Activo</span>
                                        </td>
                                        <td className="action">
                                            <Link to="/usuarios/editar" className="editar">
                                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>                               
                                            </Link>
                                            <button type="button" className="eliminar">
                                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>00000000</td>
                                        <td>Hector Vega</td>
                                        <td>Administrador</td>
                                        <td>
                                            <span className="tag-status cancelled">Inactivo</span>
                                        </td>
                                        <td className="action">
                                            <Link to="/usuarios/editar" className="editar">
                                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>     
                                            </Link>
                                            <button type="button" className="eliminar">
                                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>888888888</td>
                                        <td>Mariana Fernández</td>
                                        <td>Vendedor</td>
                                        <td>
                                            <span className="tag-status cancelled">Inactivo</span>
                                        </td>
                                        <td className="action">
                                            <Link to="/usuarios/editar" className="editar">
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
                            <h3>Vista Previa de Usuario</h3>
                            <a href="#" className="button button-show">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                Ver más</a>
                        </div>
                        <div className="card-body">
                            <h3 className="label-info">Miembro desde</h3>
                            <p className="content-info">29/09/2021</p>
                            <h3 className="label-info">Email</h3>
                            <p className="content-info">juanmolina10@gmail.com</p>
                            <h3 className="label-info">Ventas</h3>
                            <p className="content-info">54</p>
                            <h3 className="label-info">Productos</h3>
                            <p className="content-info">18</p>
                        </div>
                    </div>
                </div>
            </section>

        </Fragment>
    );
}

export default ListadoUsuarios;