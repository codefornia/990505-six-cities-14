import {Navigate} from 'react-router-dom';
import {JSX} from 'react';
import {AppRouter} from '../../const';

type PrivateRouteProps = {
  children: JSX.Element;
};

function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const hasAccess = true;
  return hasAccess ? children : <Navigate to={AppRouter.Login} />;
}

export default PrivateRoute;
