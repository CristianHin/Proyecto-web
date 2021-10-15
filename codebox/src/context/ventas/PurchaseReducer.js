import {
    OBTENER_VENTAS
} from '../../types';

export default (state, action) => {
    switch(action.type) {
        case OBTENER_VENTAS:
            return {
                ...state,
                purchases: action.payload
            }
        default: 
            return state;
    }
}