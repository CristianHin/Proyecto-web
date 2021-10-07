import { Fragment } from "react";
import { Link } from "react-router-dom";
import './ListadoDeUsuarios.css';

const ListadoDeUsuarios = () => {
    return (
        <Fragment>
            <div class="contenedores">
                <div className="Cabecera">
                    <h2>Informacion De Usuarios </h2>
                    <input type="search" placeholder="Buscar..."></input>
                    <Link to="#" className="button button-new">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            Crear Usuario
                    </Link>
                </div>
        
                <table>
                    <thead>
                        <tr>
                            <th>Id Usuario</th>
                            <th>Nombre del Usuario</th>
                            <th>Rol</th>
                            <th>Correo</th>
                            <th>Usuario</th>
                            <th>Contraseña</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1008903456</td>
                            <td>Carlos Gomez</td>
                            <td>                                
                                <select>
                                    <option>Administrador</option>
                                    <option>vendedor</option>
                                    
                                </select>
                            </td>
                            <td>Carlos84@gmail.com</td>
                            <td>carlos8</td>
                            <td>carlos844</td>
                            <td>
                                <select>
                                    <option>Activo</option>
                                    <option>Inactivo</option>
                                    <option>Desactivado</option>
                                </select>
                            </td>
                            <td>
                                <Link to="/ListadoDeUsuarios/Actualizar" className="guardar">
                                    <svg fill="none" stroke="currentColor" viewBox="0 0 20 20">
							            <path d="M17.064,4.656l-2.05-2.035C14.936,2.544,14.831,2.5,14.721,2.5H3.854c-0.229,0-0.417,0.188-0.417,0.417v14.167c0,0.229,0.188,0.417,0.417,0.417h12.917c0.229,0,0.416-0.188,0.416-0.417V4.952C17.188,4.84,17.144,4.733,17.064,4.656M6.354,3.333h7.917V10H6.354V3.333z M16.354,16.667H4.271V3.333h1.25v7.083c0,0.229,0.188,0.417,0.417,0.417h8.75c0.229,0,0.416-0.188,0.416-0.417V3.886l1.25,1.239V16.667z M13.402,4.688v3.958c0,0.229-0.186,0.417-0.417,0.417c-0.229,0-0.417-0.188-0.417-0.417V4.688c0-0.229,0.188-0.417,0.417-0.417C13.217,4.271,13.402,4.458,13.402,4.688"></path>
						</svg>                                                
                                </Link>
                                <button type="button" className="eliminar">
                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>1008904561</td>
                            <td>Andres Cardona</td>
                            <td> 
                                <select>
                                    <option>Administrador</option>
                                    <option>vendedor</option>
                                    
                                </select>
                            </td>
                            <td>Andrescar@gmail.com</td>
                            <td>Andrescar</td>
                            <td>andrescar8</td>
                            <td>                                
                                <select>
                                    <option>Activo</option>
                                    <option>Inactivo</option>
                                    <option>Desactivado</option>
                                </select>
                            </td>
                            <td>                               
                                <Link to="/ListadoDeUsuarios/Actualizar" className="guardar">
                                    <svg fill="none" stroke="currentColor" viewBox="0 0 20 20">
							            <path d="M17.064,4.656l-2.05-2.035C14.936,2.544,14.831,2.5,14.721,2.5H3.854c-0.229,0-0.417,0.188-0.417,0.417v14.167c0,0.229,0.188,0.417,0.417,0.417h12.917c0.229,0,0.416-0.188,0.416-0.417V4.952C17.188,4.84,17.144,4.733,17.064,4.656M6.354,3.333h7.917V10H6.354V3.333z M16.354,16.667H4.271V3.333h1.25v7.083c0,0.229,0.188,0.417,0.417,0.417h8.75c0.229,0,0.416-0.188,0.416-0.417V3.886l1.25,1.239V16.667z M13.402,4.688v3.958c0,0.229-0.186,0.417-0.417,0.417c-0.229,0-0.417-0.188-0.417-0.417V4.688c0-0.229,0.188-0.417,0.417-0.417C13.217,4.271,13.402,4.458,13.402,4.688"></path>
						</svg>                                                
                                </Link>
                                <button type="button" className="eliminar">
                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>1028934565</td>
                            <td>Tatiana Rincon</td>
                            <td> 
                                <select>
                                    <option>Administrador</option>
                                    <option>vendedor</option>
                                    
                                </select>
                            </td>
                            <td>TatianaR5@gmail.com</td>
                            <td>TatianaR5</td>
                            <td>TatianaR5</td>
                            <td> 
                                <select>
                                    <option>Activo</option>
                                    <option>Inactivo</option>
                                    <option>Desactivado</option>
                                </select>
                            </td>
                            <td>                               
                                <Link to="/ListadoDeUsuarios/Actualizar" className="guardar">
                                    <svg fill="none" stroke="currentColor" viewBox="0 0 20 20">
							            <path d="M17.064,4.656l-2.05-2.035C14.936,2.544,14.831,2.5,14.721,2.5H3.854c-0.229,0-0.417,0.188-0.417,0.417v14.167c0,0.229,0.188,0.417,0.417,0.417h12.917c0.229,0,0.416-0.188,0.416-0.417V4.952C17.188,4.84,17.144,4.733,17.064,4.656M6.354,3.333h7.917V10H6.354V3.333z M16.354,16.667H4.271V3.333h1.25v7.083c0,0.229,0.188,0.417,0.417,0.417h8.75c0.229,0,0.416-0.188,0.416-0.417V3.886l1.25,1.239V16.667z M13.402,4.688v3.958c0,0.229-0.186,0.417-0.417,0.417c-0.229,0-0.417-0.188-0.417-0.417V4.688c0-0.229,0.188-0.417,0.417-0.417C13.217,4.271,13.402,4.458,13.402,4.688"></path>
						</svg>                                                
                                </Link>
                                <button type="button" className="eliminar">
                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>1038935572</td>
                            <td>Samuel Zapata</td>
                            <td> 
                                <select>
                                    <option>Administrador</option>
                                    <option>vendedor</option>
                                    
                                </select>
                            </td>
                            <td>Samuelz2@gmail.com</td>
                            <td>Samuelz2</td>
                            <td>Samuelz2</td>
                            <td>
                                <select>
                                    <option>Activo</option>
                                    <option>Inactivo</option>
                                    <option>Desactivado</option>
                                </select>
                            </td>
                            <td>                               
                                <Link to="/ListadoDeUsuarios/Actualizar" className="guardar">
                                    <svg fill="none" stroke="currentColor" viewBox="0 0 20 20">
							            <path d="M17.064,4.656l-2.05-2.035C14.936,2.544,14.831,2.5,14.721,2.5H3.854c-0.229,0-0.417,0.188-0.417,0.417v14.167c0,0.229,0.188,0.417,0.417,0.417h12.917c0.229,0,0.416-0.188,0.416-0.417V4.952C17.188,4.84,17.144,4.733,17.064,4.656M6.354,3.333h7.917V10H6.354V3.333z M16.354,16.667H4.271V3.333h1.25v7.083c0,0.229,0.188,0.417,0.417,0.417h8.75c0.229,0,0.416-0.188,0.416-0.417V3.886l1.25,1.239V16.667z M13.402,4.688v3.958c0,0.229-0.186,0.417-0.417,0.417c-0.229,0-0.417-0.188-0.417-0.417V4.688c0-0.229,0.188-0.417,0.417-0.417C13.217,4.271,13.402,4.458,13.402,4.688"></path>
						</svg>                                                
                                </Link>
                                <button type="button" className="eliminar">
                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                </button>
                            </td>
                        </tr>
                       
                    </tbody>
                </table>

            </div>

        </Fragment>
    );
}

export default ListadoDeUsuarios;