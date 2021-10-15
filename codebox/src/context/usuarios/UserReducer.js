import {
    OBTENER_USUARIOS,
    VALIDAR_FORMULARIO,
    MOSTRAR_ALERTA,
    CERRAR_ALERTA,
} from '../../types';

export default (state, action) => {
    switch(action.type) {
        case OBTENER_USUARIOS:
            return {
                ...state,
                users: action.payload
            }
        case VALIDAR_FORMULARIO:
            return {
                ...state,
                errorform: true
            }
        case MOSTRAR_ALERTA:
            return {
                ...state,
                alert: true
            }
        case CERRAR_ALERTA:
            return {
                ...state,
                alert: false,
                errorform: false,
            }
        default: 
            return state;
    }
}