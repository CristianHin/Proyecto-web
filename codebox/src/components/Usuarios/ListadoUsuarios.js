import UserContext from "../../context/usuarios/UserContext";
import AlertContext from "../../context/alerts/AlertContext";
import { Fragment, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Alert from "../includes/Alert";
import './ListadoUsuarios.css';
import axios from "axios";

const ListadoUsuarios = () => {

    const usersContext = useContext(UserContext);
    const { users, getUsers } = usersContext;

    const alertsContext = useContext(AlertContext);
    const { alert, closeAlert } = alertsContext;

    //Obtener usuarios cuando cargue el componente
    useEffect(() => {
        const consultAPI = async () => {
            const url = 'http://localhost:8080/api/usuarios';
    
            const results = await axios.get(url);

            getUsers(results.data.users);
        }

        consultAPI();
    }, []);

    useEffect(() => {
        if (alert) {
            setTimeout(() => {
                closeAlert();
            }, 5000);
        }
    }, [alert]);

    return ( 
        <Fragment>
            {
                alert
                ? 
                    <Alert 
                        alertType="success"
                        alertHeader="¡Guardado!" 
                        alertBody="Los cambios se han guardado con éxito" 
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
                                    {
                                        users.map(user => {
                                            return (
                                                <tr key={ user._id }>
                                                    <td>{ user._id }</td>
                                                    <td>{ user.name }</td>
                                                    <td className="role">{ user.role }</td>
                                                    <td>
                                                        <span className={ `tag-status ${ user.status == 'pendiente' ? 'pending' : user.status == 'autorizado' ? 'paid' : 'cancelled' }` }>
                                                            { user.status == 'pendiente' ? 'pendiente' : user.status == 'autorizado' ? 'autorizado' : 'no autorizado' }
                                                        </span>
                                                    </td>
                                                    <td className="action">
                                                        <Link 
                                                                to={{
                                                                    pathname: `/usuarios/editar/${user._id}`,
                                                                    state: user
                                                                }} 
                                                                className="editar">
                                                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>   
                                                            </Link>
                                                    </td>
                                                </tr>
                                            )
                                        })
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
                </div>
            </section>
        </Fragment>
    );
}

export default ListadoUsuarios;