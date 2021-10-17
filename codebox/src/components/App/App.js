//import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import "./App.css";
import Login from "./../Login/Login";
import NavigationMenu from "../includes/NavigationMenu";
import ListadoVentas from "../Ventas/ListadoVentas";
import CrearVenta from '../Ventas/CrearVenta';
import ListadoUsuarios from '../Usuarios/ListadoUsuarios';
import ListadoProductos from '../Productos/ListadoProductos';
import EditarVenta from '../Ventas/EditarVenta'
import AgregarProducto from '../Productos/AgregarProducto';
import EditarProducto from '../Productos/EditarProducto';
import EditarUsuario from '../Usuarios/EditarUsuario';

import AlertState from '../../context/alerts/AlertState';
import ProductState from '../../context/productos/ProductState';
import PurchaseState from '../../context/ventas/PurchaseState';
import UserState from '../../context/usuarios/UserState';

const App = () => {
    return (
      <div className="App">
        <PurchaseState>
          <UserState>
            <ProductState>
              <AlertState>
                <Router>
                  <NavigationMenu />
                  <Switch>
                    <Route path="/login" exact component={ Login }></Route>
                    <Route path="/ventas" exact component={ ListadoVentas }></Route>
                    <Route path="/ventas/crear" exact component={ CrearVenta }></Route>
                    <Route path="/ventas/editar/:id" exact component={ EditarVenta }></Route>
                    <Route path="/usuarios" exact component={ ListadoUsuarios }></Route>
                    <Route path="/usuarios/editar/:id" exact component={ EditarUsuario }></Route>
                    <Route path="/productos" exact component={ ListadoProductos }></Route>
                    <Route path="/productos/agregar" exact component={ AgregarProducto }></Route>
                    <Route path="/productos/editar/:id" exact component={ EditarProducto }></Route>
                  </Switch>
                </Router>
              </AlertState>
            </ProductState>
          </UserState>
        </PurchaseState>
      </div>
    )
}

export default App;
