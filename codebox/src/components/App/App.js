//import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import "./App.css";
import Login from "./../Login/Login";
import NavigationMenu from "../includes/NavigationMenu";
import ListadoVentas from "../Ventas/ListadoVentas";
import CrearVenta from '../Ventas/CrearVenta';
import ListadoDeUsuarios from '../Usuarios/ListadoDeUsuarios';
import ActualizacionUsuarios from '../Usuarios/ActualizacionUsuarios';
import Productos from '../Productos/Productos';
import EditarVentas from '../Ventas/EditarVentas'
import AgregarPrducto from '../Productos/AgregarProducto';
import EditarProducto from '../Productos/EditarProducto';

const App = () => {
    return (
      <div className="App">
        <Router>
          <NavigationMenu />
          <Switch>
            <Route path="/login" exact component={ Login }></Route>
            <Route path="/ventas" exact component={ ListadoVentas }></Route>
            <Route path="/ventas/crear" exact component={ CrearVenta }></Route>
            <Route path="/ventas/editar" exact component={ EditarVentas }></Route>
            <Route path="/ListadoDeUsuarios" exact component={ListadoDeUsuarios }></Route>
            <Route path="/ListadoDeUsuarios/Actualizar" exact component={ActualizacionUsuarios}></Route>
            <Route path="/Productos" exact component={Productos}></Route>
            <Route path="/Productos/Agragar" exact component={AgregarPrducto}></Route>
            <Route path="/Productos/Editar" exact component={EditarProducto}></Route>
          </Switch>
        </Router>
      </div>
    )
}

export default App;
