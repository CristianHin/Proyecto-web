import PurchaseContext from '../../context/ventas/PurchaseContext';
import { Fragment, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import './ListadoVentas.css';
import axios from 'axios';

const ListadoVentas = () => {

    //Extraer ventas del state inicial
    const purchasesContext = useContext(PurchaseContext);

    const { purchases, getPurchases } = purchasesContext;

    //Obtener purchases cuando cargue el componente
    useEffect(() => {
        const consultAPI = async () => {
            const url = 'http://localhost:8080/api/ventas';
    
            const results = await axios.get(url);

            getPurchases(results.data.purchases);
        }

        consultAPI();
    }, []);

    return ( 
        <Fragment>
            <section className="main-container">
                <div className="cards">
                    <div className="card card-caption">
                        <div className="card-caption-title">
                            <h2>Módulo de ventas</h2>
                            <Link to="/ventas/crear" className="button button-new">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                Nueva venta
                            </Link>
                        </div>   
                        <p>
                            En esta sección usted podrá visualizar el listado de ventas del sistema,
                            con la posibilidad de filtrarlas según el campo que seleccione. También 
                            tendrá la opción de crear una nueva venta o de actualizar las ya existentes.
                        </p>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h3>Información general</h3>
                            <div className="input-group">
                                {/* <select>
                                    <option>5</option>
                                    <option>10</option>
                                    <option>25</option>
                                </select> */}
                                <select>
                                    <option>ID Venta</option>
                                    <option>ID Cliente</option>
                                    <option>Nombre Cliente</option>
                                </select>
                                <input type="search" placeholder="Buscar..."></input>
                            </div>
                        </div>
                        <div className="card-body">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Id venta</th>
                                        <th>Id cliente</th>
                                        <th>Nombre cliente</th>
                                        <th>Fecha venta</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        purchases.map(purchase => {
                                            return (
                                                <tr key={ purchase._id }>
                                                    <td>{ purchase._id }</td>
                                                    <td>{ purchase.client_id }</td>
                                                    <td>{ purchase.client_name }</td>
                                                    <td>{ purchase.date }</td>
                                                    <td className="action">
                                                    <Link to="/ventas/editar" className="editar">
                                                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>   
                                                    </Link>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                            {/* <div className="pagination">
                                Mostrando de 1 a 8 de 100 entradas 
                                <div className="pagination-links">
                                    <a href="#" className="button button-pagination">Anterior</a>
                                    <a href="#" className="button button-pagination">Siguiente</a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h3>Vista Previa de Venta</h3>
                            <a href="#" className="button button-show">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                Ver más</a>
                        </div>
                        <div className="card-body">
                            <h3 className="label-info">Fecha</h3>
                            <p className="content-info">29/09/2021</p>
                            <h3 className="label-info">Productos Vendidos</h3>
                            <p className="content-info">34</p>
                            <h3 className="label-info">Impuesto</h3>
                            <p className="content-info">19%</p>
                            <h3 className="label-info">Descuento</h3>
                            <p className="content-info">No</p>
                            <h3 className="label-info">Total</h3>
                            <p className="content-info">$10.342.820</p>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}
 
export default ListadoVentas;