import {
    MOSTRAR_ALERTA,
    CERRAR_ALERTA,
    VALIDAR_FORMULARIO,
    FORMULARIO_PRODUCTOS_VACIO,
    PRODUCTO_NO_EXISTE,
} from '../../types';

export default (state, action) => {
    switch(action.type) {
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
                    errorformempty: false,
                    errornoexists: false
                }
            case VALIDAR_FORMULARIO:
                return {
                    ...state,
                    errorform: true
                }
            case FORMULARIO_PRODUCTOS_VACIO:
                return {
                    ...state,
                    errorformempty: true
                }
            case PRODUCTO_NO_EXISTE:
                return {
                    ...state,
                    errornoexists: true
                }
        default: 
            return state;
    }
}