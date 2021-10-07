import { Fragment } from 'react';
import './AgregarProducto.css'

const AgregarProducto = () => {
    return ( 
        <section className="main-container">
            <div className="cards">
                <div className="card">
                    <form action="#" method="POST">
                        <div className="card-header">
                            <h3>Registro de Producto</h3>
                        </div>
                        <div className="card-body"> 
                            <h3 className="label-info">Información general</h3>
                            <div className="form-section">
                                <div className="form-group">
                                    <label htmlFor="product-id">ID Producto</label>
                                    <input type="text" id="product-id" name="product-id" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="product-brand">Marca</label>
                                    <input type="text" id="product-brand" name="product-brand" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="product-name">Nombre</label>
                                    <input type="text" id="product-name" name="product-name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="product-price">Precio Unitario <small>($)</small></label>
                                    <input type="number" id="product-price" name="product-price" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="product-iva">IVA</label>
                                    <select id="product-iva" name="product-iva">
                                        <option selected>--SELECCIONE UNA OPCIÓN--</option>
                                        <option>Aplica</option>
                                        <option>No aplica</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="product-stock">Stock <small>(cantidad)</small></label>
                                    <input type="number" id="product-stock" name="product-stock" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="product-dimension">Dimensiones <small>(cm)</small></label>
                                    <input type="text" id="product-dimension" name="product-dimension" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="product-weight">Peso <small>(gr)</small></label>
                                    <input type="number" id="product-weight" name="product-weight" />
                                </div>
                                <div className="form-group two-columns">
                                    <label htmlFor="product-description">Descripción</label>
                                    <textarea rows="5" id="product-description" name="product-description"></textarea>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="card-footer">
                            <a href="#" className="button button-new">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path></svg>
                                Guardar Producto
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
 
export default AgregarProducto;