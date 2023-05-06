import React from 'react';
import { Route, Navigate,Routes ,  useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, roles, ...rest }) => {
    
    const history = useNavigate();

return(
<Routes> 
  <Route {...rest} render={(props) => {
      const currentUser = localStorage.getItem('currentUser');
      if (!currentUser) {
          // not logged in so redirect to login page with the return url
          return <Navigate to={{ pathname: '/login', state: { from: history.location } }} />
      }

      // check if route is restricted by role
      if (roles && roles.indexOf(currentUser.role) === -1) {
          // role not authorized so redirect to home page
          return <Navigate to={{ pathname: '/'}} />
      }

      // authorized so return component
      return <Component {...props} />
  }} />
  </Routes>   
)};

PrivateRoute.propTypes = {
    component: PropTypes.elementType.isRequired,
    roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  };
export default PrivateRoute;
