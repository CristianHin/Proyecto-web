import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth/AuthContext';

const PrivateRoute = ({ component: Component, ...props }) => {

    const authsContext = useContext(AuthContext);
    const { user, loading, authenticated, userAuthenticated } = authsContext;

    useEffect(() => {
        if (user === null) {
            userAuthenticated();
        }
    }, []);

    return ( 
        <Route { ...props } render={ props => !authenticated && !loading ? (
            <Redirect to="/" />
        ) : (
            <Component { ...props } />
        ) } />
    );
}
 
export default PrivateRoute;