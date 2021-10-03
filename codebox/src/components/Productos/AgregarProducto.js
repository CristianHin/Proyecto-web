import { Fragment } from 'react';
import './AgregarProducto.css'

const AgregarPrducto = () => {
    const enviar = (e) => {
        e.preventDefault();
        alert("Producto Agregado")
    }
    return ( 
        <Fragment>
            <div className="contenedor">
                <h2>Agrega tu producto</h2>
                <form onSubmit={enviar}>
                    <label>
                        Escribe el ID del producto
                        <input></input>
                    </label>
                    <label>
                        Escribe el nombre del producto
                        <input></input>
                    </label>
                    <label>
                        Escribe la cantidad se productos
                        <input></input>
                    </label>
                    <label>
                        ¿Aplica IVA?
                        <select>
                            <option>Aplica</option>
                            <option>No aplica</option>
                        </select>
                    </label>
                    <button type="submit">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                            Agregar
                    </button>
                </form>
                
            </div>
        </Fragment>
    );
}
 
export default AgregarPrducto;