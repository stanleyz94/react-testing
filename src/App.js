import React, { useReducer, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Layout from './components/Layout/Layout';
import Searchbar from './components/UI/Searchbar/Searchbar';
import Footer from './components/Footer/Footer';
import ThemeButton from './components/UI/ThemeButton/ThemeButton';
import ThemeContext from './context/ThemeContext';
import AuthContext from './context/AuthContext';
import ReducerContext from './context/ReducerContext';
import InspiringQuote from './components/InspiringQuote/InspiringQuote';
import Hotel from './pages/Hotel';
import { reducer, initialState } from './reducer';
import Home from './pages/Home';
import Search from './pages/Search';
import NotFound from './pages/404/404';
import Login from './pages/Auth/Login/Login';
import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute';
import ErrorBoundary from './hoc/ErrorBoundary';
import AddHotel from './pages/Profile/MyHotels/AddHotel/AddHotel';

const Profile = lazy(() => import('./pages/Profile/Profile'));

//leniwa funkcja inicjalizujca ktora edytuje poczatkowy stan i potem go wypluwa

const init = (initState) => {
  initState.theme = 'warning';
  return initState;
};
function App() {
  // const [hotels, setHotels] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [theme, setTheme] = useState('danger');
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // dispatch - wysylaja jakas informacje,
  //korzysta z 2 parametrow (1 to jakas funkcja, 2 to wartosc domyslna  )
  const [state, dispatch] = useReducer(reducer, initialState, init);

  const changeTheme = () => {
    dispatch({ type: 'change-theme' });
  };

  const header = (
    <Header>
      <InspiringQuote />
      <Searchbar />
      <ThemeButton onChange={changeTheme} />
    </Header>
  );
  const content = (
    <div>
      <ErrorBoundary>
        <Suspense fallback={<p>Ładowanie...</p>}>
          <Switch>
            <AuthenticatedRoute
              path='/profil/hotele/dodaj'
              component={AddHotel}
            />
            <AuthenticatedRoute path='/profil' component={Profile} />
            <Route path='/hotele/:id' component={Hotel} />
            <Route path='/wyszukaj/:term?' component={Search} />
            <Route path='/zaloguj' component={Login} />
            <Route exact={true} path='/' component={Home} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
  const menu = <Menu />;
  const footer = <Footer />;
  return (
    <Router>
      <AuthContext.Provider
        value={{
          isAuthenticated: state.isAuthenticated,
          // login: () => setIsAuthenticated(true),
          login: () => dispatch({ type: 'login' }),
          // logout: () => setIsAuthenticated(false),
          logout: () => dispatch({ type: 'logout' }),
        }}
      >
        <ThemeContext.Provider
          value={{
            color: state.theme,
            changeTheme: changeTheme,
          }}
        >
          <ReducerContext.Provider
            value={{
              state: state,
              dispatch: dispatch,
            }}
          >
            <ErrorBoundary>
              <Layout
                header={header}
                menu={menu}
                content={content}
                footer={footer}
              />
            </ErrorBoundary>
          </ReducerContext.Provider>
        </ThemeContext.Provider>
      </AuthContext.Provider>
    </Router>
  );
}

export default App;
