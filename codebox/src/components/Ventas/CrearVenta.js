import { Fragment } from 'react';
import NavigationMenu from '../includes/NavigationMenu';
import './CrearVenta.css'

const CrearVenta = () => {
    return ( 
        <Fragment>
           
            <section className="main-container">
                <div className="cards">
                    <div className="card">
                        <form action="#" method="POST">
                            <div className="card-header">
                                <h3>Registro de venta</h3>
                            </div>
                            <div className="card-body"> 
                                <h3 className="label-info">Información general</h3>
                                <div className="form-section">
                                    <div className="form-group">
                                        <label htmlFor="purchase-id">ID Venta</label>
                                        <input type="text" id="purchase-id" name="purchase-id" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="purchase-date">Fecha</label>
                                        <input type="date" id="purchase-date" name="purchase-date" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="purchase-tax">Impuesto <small>(%)</small></label>
                                        <input type="number" id="purchase-tax" name="purchase-tax" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="purchase-discount">Descuento</label>
                                        <input type="number" id="purchase-discount" name="purchase-discount" />
                                    </div>
                                </div>
                                <h3 className="label-info">Información del cliente</h3>
                                <div className="form-section">
                                    <div className="form-group">
                                        <label htmlFor="client-id">ID Cliente</label>
                                        <div className="input-search">
                                            <input type="text" id="client-id" name="client-id" />
                                            <button type="button">
                                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="client-name">Nombre</label>
                                        <input type="text" id="client-name" name="client-name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="client-email">Email</label>
                                        <input type="text" id="client-email" name="client-email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="client-tel">Teléfono</label>
                                        <input type="tel" id="client-tel" name="client-tel" />
                                    </div>
                                </div>
                                <h3 className="label-info">Información de productos</h3>
                                <div className="form-section">
                                    <div className="form-group">
                                        <label htmlFor="product-id">ID producto</label>
                                        <div className="input-search">
                                            <input type="text" id="product-id" name="product-id" />
                                            <button type="button">
                                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="product-name">Nombre</label>
                                        <input type="text" id="product-name" name="product-name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="product-price">Precio</label>
                                        <input type="number" id="product-price" name="product-price" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="product-quantity">Cantidad</label>
                                        <input type="number" id="product-quantity" name="product-quantity" />
                                    </div>
                                    <div className="form-group">
                                        <a href="#" className="button button-add">
                                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                                            Agregar
                                        </a>
                                    </div>
                                </div>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Nombre</th>
                                            <th>Cantidad</th>
                                            <th>Precio</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Computador DELL</td>
                                            <td>3</td>
                                            <td>2.000.000</td>
                                            <td>
                                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Audífonos Beat</td>
                                            <td>10</td>
                                            <td>100.000</td>
                                            <td>
                                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Nintendo Switch</td>
                                            <td>5</td>
                                            <td>1.500.000</td>
                                            <td>
                                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <hr />
                            <div className="card-footer">
                                <a href="#" className="button button-new">
                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path></svg>
                                    Guardar Venta
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}
 
export default CrearVenta;