//import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import "./App.css";
import Login from "./../Login/Login";
import NavigationMenu from "../includes/NavigationMenu";
import ListadoVentas from "../Ventas/ListadoVentas";

const App = () => {
    return (
      <div className="App">
        <Router>
          {/* <NavigationMenu /> */}
          <Switch>
            <Route path="/login" exact component={ Login }></Route>
            <Route path="/ventas" exat component={ ListadoVentas }></Route>
          </Switch>
        </Router>
      </div>
    )
}

export default App;
