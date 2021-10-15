import React, { useReducer } from 'react';
import UserContext from './UserContext';
import UserReducer from './UserReducer';

import { 
    OBTENER_USUARIOS,
    VALIDAR_FORMULARIO,
    MOSTRAR_ALERTA,
    CERRAR_ALERTA,
} from '../../types';

const UserState = props => {

    const initialState = {
        users: [],
        errorform: false,
        alert: false
    }

    //Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(UserReducer, initialState)

    //Serie de funciones para el CRUD

    //Obtener usuarios
    const getUsers = users => {
        dispatch({
            type: OBTENER_USUARIOS,
            payload: users
        });
    };

    //Validar formulario
    const showError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        });
    };

    //Mostrar alerta
    const showAlert = () => {
        dispatch({
            type: MOSTRAR_ALERTA
        });
    };

    //Cerrar alerta
    const closeAlert = () => {
        dispatch({
            type: CERRAR_ALERTA
        })
    };

    return (
        <UserContext.Provider
            value={{
                users: state.users,
                errorform: state.errorform,
                alert: state.alert,
                getUsers,
                showError,
                showAlert,
                closeAlert
            }}
        >
            { props.children }
        </UserContext.Provider>
    )
}

export default UserState;