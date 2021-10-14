import React, { useReducer } from 'react';
import ProductContext from './ProductContext';
import ProductReducer from './ProductReducer';

import { 
    AGREGAR_PRODUCTO,
    CERRAR_ALERTA,
    MOSTRAR_ALERTA,
    OBTENER_PRODUCTOS, VALIDAR_FORMULARIO
} from '../../types';

const ProductState = props => {

    const initialState = {
        products: [],
        errorform: false,
        alert: false,
    }

    //Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(ProductReducer, initialState)

    //Serie de funciones para el CRUD

    //Obtener productos
    const getProducts = products => {
        dispatch({
            type: OBTENER_PRODUCTOS,
            payload: products
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

    const addProduct = () => {
        dispatch({
            type: AGREGAR_PRODUCTO
        });
    };

    return (
        <ProductContext.Provider
            value={{
                products: state.products,
                errorform: state.errorform,
                alert: state.alert,
                getProducts,
                showError,
                showAlert,
                closeAlert,
                addProduct
            }}
        >
            { props.children }
        </ProductContext.Provider>
    )
}

export default ProductState;