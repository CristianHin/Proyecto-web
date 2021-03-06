import React, {Fragment, useState, useEffect, useContext} from 'react';
import AlertContext from "../../context/alerts/AlertContext";
import clientAxios from '../../config/axios';
import { useHistory } from 'react-router';
import Alert from '../includes/Alert';

const EditarUsuario = (props) => {

    //HOOKS AND DESTRUCTURING
    const alertsContext = useContext(AlertContext);
    const { alert, showAlert, closeAlert } = alertsContext;

    const { email, imageurl, name, role, status, _id } = props.location.state;
    
    const [user, setUser] = useState({
        role: role,
        status: status.toString(),
    });

    useEffect(() => {
        let timer = setTimeout(() => {
            closeAlert();
        }, 5000);

        return () => {
            clearTimeout(timer);
        };
    }, [alert]);

    let history = useHistory();

    //EVENTOS
    const changeUser = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const updateUser = e => {
        e.preventDefault();

        //Validar formulario
        if (user.status.trim() === '') {
            closeAlert();
            showAlert('cancel', '¡Error!', 'El campo estado es requerido');
            return ;
        }

        //Actualizar usuario
        clientAxios.patch(`/usuarios/${_id}`, user)
            .then(res => {
                showAlert('success', '¡Guardado!', 'Los cambios se han guardado con éxito');
                history.push({
                    pathname: '/usuarios'
                });
            })
            .catch(err => {
                closeAlert();
                showAlert('cancel', '¡Error!', err.response.data.msg);
            });
    };

    return ( 
        <Fragment>
            {
                alert
                ?
                    <Alert alertType={ alert.type } alertHeader={ alert.title } alertBody={ alert.msg } />
                :
                    null
            }
            <section className="main-container">
                <div className="cards">
                    <div className="card">
                        <form method="POST" onSubmit={ updateUser }>
                            <div className="card-header">
                                <h3>Editar Usuario</h3>
                            </div>
                            <div className="card-body"> 
                                <h3 className="label-info">Información general</h3>
                                <div className="form-section">
                                    <div className="form-group">
                                        <label htmlFor="role">Rol</label>
                                        <select 
                                            id="role" 
                                            name="role" 
                                            onChange={ changeUser }
                                            defaultValue={ user.role === 'administrador' 
                                                ? 'administrador' 
                                                : user.role === 'vendedor' 
                                                ? 'vendedor'
                                                : '' }
                                        >
                                            <option value="">--SELECCIONE UN ROL--</option>
                                            <option value="administrador">Administrador</option>
                                            <option value="vendedor">Vendedor</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="status">Estado</label>
                                        <select 
                                            id="status" 
                                            name="status" 
                                            onChange={ changeUser }
                                            value={ user.status === 'pendiente' ? 'pendiente' : user.status === 'autorizado' ? 'autorizado' : 'no autorizado' }
                                        >
                                            <option value="pendiente">Pendiente</option>
                                            <option value="autorizado">Autorizado</option>
                                            <option value="no autorizado">No autorizado</option>
                                        </select>
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
 
export default EditarUsuario;