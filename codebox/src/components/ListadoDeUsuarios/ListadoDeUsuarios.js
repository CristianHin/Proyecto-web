import { Fragment } from "react";
import { Link } from "react-router-dom";
import './ListadoDeUsuarios.css';

const ListadoDeUsuarios = () => {
    return (
        <Fragment>
            <div class="contenedor">
                <table>
                    <thead>
                        <tr>
                            <th>Id venta</th>
                            <th>Id cliente</th>
                            <th>Nombre del cliente</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>123456789</td>
                            <td>Tiendas ARA</td>
                            <td>
                                <span className="tag-status cancelled">cancelada</span>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>987654321</td>
                            <td>Jumbo</td>
                            <td>
                                <span className="tag-status paid">pagada</span>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>135792468</td>
                            <td>Homecenter</td>
                            <td>
                                <span className="tag-status pending">pendiente</span>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>246813579</td>
                            <td>Éxito</td>
                            <td>
                                <span className="tag-status paid">pagada</span>
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>975318642</td>
                            <td>Pepe Ganga</td>
                            <td>
                                <span className="tag-status cancelled">cancelada</span>
                            </td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>864297531</td>
                            <td>Justo y Bueno</td>
                            <td>
                                <span className="tag-status pending">pendiente</span>
                            </td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>00000000</td>
                            <td>Olímpica</td>
                            <td>
                                <span className="tag-status pending">pendiente</span>
                            </td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>888888888</td>
                            <td>Mi Futuro</td>
                            <td>
                                <span className="tag-status paid">pagada</span>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>

        </Fragment>
    );
}

export default ListadoDeUsuarios;