import React, { useReducer } from 'react';
import AlertContext from './AlertContext';
import AlertReducer from './AlertReducer';

import {
    VALIDAR_FORMULARIO,
    MOSTRAR_ALERTA,
    CERRAR_ALERTA,
    FORMULARIO_PRODUCTOS_VACIO,
    PRODUCTO_NO_EXISTE,
} from '../../types';

const AlertState = props => {

    const initialState = {
        alert: false,
        errorform: false,
        errorformempty: false,
        errornoexists: false,
    }

    //Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(AlertReducer, initialState)

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

    //Validar formulario
    const showError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        });
    };

    //Error de formulario de productos vacío
    const showErrorEmpty = () => {
        dispatch({
            type: FORMULARIO_PRODUCTOS_VACIO
        });
    };

    //Error de producto inexistente
    const showErrorNoExists = () => {
        dispatch({
            type: PRODUCTO_NO_EXISTE
        });
    };

    return (
        <AlertContext.Provider
            value={{
                alert: state.alert,
                errorform: state.errorform,
                errorformempty: state.errorformempty,
                errornoexists: state.errornoexists,
                showAlert,
                closeAlert,
                showError,
                showErrorEmpty,
                showErrorNoExists,
            }}
        >
            { props.children }
        </AlertContext.Provider>
    )
}

export default AlertState;