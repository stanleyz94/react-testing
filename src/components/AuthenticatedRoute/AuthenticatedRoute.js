import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import ReducerContext from '../../context/ReducerContext';

export default function AuthenticatedRoute(props) {
  const context = useContext(ReducerContext);

  return context.state.isAuthenticated ? (
    <Route {...props} />
  ) : (
    <Redirect to='/zaloguj' />
  );
}
