import React, { useReducer } from 'react';
import AlertContext from './AlertContext';
import AlertReducer from './AlertReducer';

import {
    VALIDAR_FORMULARIO,
    MOSTRAR_ALERTA,
    CERRAR_ALERTA,
} from '../../types';

const AlertState = props => {

    const initialState = {
        errorform: false,
        alert: false,
    }

    //Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(AlertReducer, initialState)

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
        <AlertContext.Provider
            value={{
                errorform: state.errorform,
                alert: state.alert,
                showError,
                showAlert,
                closeAlert
            }}
        >
            { props.children }
        </AlertContext.Provider>
    )
}

export default AlertState;