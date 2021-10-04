import { Fragment } from 'react';
import NavigationMenu from '../includes/NavigationMenu';


const EditarVentas = () => {

    return (
        <Fragment>
            <section className="main-container">
                <div className="cards">
                    <div className="card">
                        <form action="#" method="POST">
                            <div className="card-header">
                                <h3>Editar Venta</h3>
                            </div>
                            <div className="card-body"> 
                                <h3 className="label-info">Información general</h3>
                                <div className="form-section">
                                   
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

                                            Guardar Cambios
                                        </a>
                                    </div>
                                </div>
                               
                            </div>
                            
                        </form>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default EditarVentas