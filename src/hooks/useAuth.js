import { useContext, useDebugValue } from 'react';
import AuthContext from '../context/AuthContext';

export default function useAuth() {
  const authContext = useContext(AuthContext);

  const auth = authContext.isAuthenticated;


  useDebugValue(auth ? 'zalogowany ' : 'wylogowany');
  const setAuth = (value) => {
    if (value) {
      authContext.login();
    } else {
      authContext.logout();
    }
  };
  return [auth, setAuth];
}
