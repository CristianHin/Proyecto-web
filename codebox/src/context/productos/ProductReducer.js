import {  
    AGREGAR_PRODUCTO,
    CERRAR_ALERTA,
    MOSTRAR_ALERTA,
    OBTENER_PRODUCTOS,
    VALIDAR_FORMULARIO,
} from '../../types';

export default (state, action) => {
    switch(action.type) {
        case OBTENER_PRODUCTOS:
            return {
                ...state,
                products: action.payload
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
        case AGREGAR_PRODUCTO:
            return {
                ...state,
                errorform: false,
            }
        default: 
            return state;
    }
}