import React from 'react';

const EditarUsuario = () => {
    return ( 
        <section className="main-container">
            <div className="cards">
                <div className="card">
                    <form action="#" method="POST">
                        <div className="card-header">
                            <h3>Editar Usuario</h3>
                        </div>
                        <div className="card-body"> 
                            <h3 className="label-info">Información general</h3>
                            <div className="form-section">
                                <div className="form-group">
                                    <label htmlFor="user-role">Rol</label>
                                    <select id="user-role" name="user-role">
                                        <option selected>--SELECCIONE UN ROL--</option>
                                        <option>Administrador</option>
                                        <option>Vendedor</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="user-status">Estado</label>
                                    <select id="user-status" name="user-status">
                                        <option selected>--SELECCIONE UN ESTADO--</option>
                                        <option>Activo</option>
                                        <option>Inactivo</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="card-footer">
                            <a href="#" className="button button-new">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path></svg>
                                Guardar cambios
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
 
export default EditarUsuario;