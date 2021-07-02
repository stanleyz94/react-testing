import React, { useEffect, useReducer } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Hotels from './components/Hotels/Hotels';
import LoadingIcon from './components/UI/LoadingIcon/LoadingIcon';
import Layout from './components/Layout/Layout';
import Searchbar from './components/UI/Searchbar/Searchbar';
import Footer from './components/Footer/Footer';
import ThemeButton from './components/UI/ThemeButton/ThemeButton';
import ThemeContext from './context/ThemeContext';
import AuthContext from './context/AuthContext';

const backendHotels = [
  {
    id: 1,
    name: 'Pod akacjami',
    city: 'Warszawa',
    rating: 8.3,
    description:
      ' ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat',
    image: '',
  },
  {
    id: 2,
    name: 'Dębowy',
    city: 'Lublin',
    rating: 8.8,
    description:
      ' ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat',
    image: '',
  },
];

function App() {
  // const [hotels, setHotels] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [theme, setTheme] = useState('danger');
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  const reducer = (state, action) => {
    switch (action.type) {
      case 'change-theme':
        /// rozpakowuje state dzieki destrukturyzacji,
        //a nastepnie zmieniam 1 wlasciwosc
        return {
          ...state,
          theme: state.theme === 'danger' ? 'primary' : 'danger',
        };

      //dluzsza wersja
      // const newState = {...state};
      // newState.theme = state.theme === 'danger' ? 'primary' : 'danger'
      // return newState
      //powinnismy kopiowac stan anizeli modyfikowac oryginalny
      // state.theme = state.theme === 'danger' ? 'primary' : 'danger'
      //return state
      case 'set-hotels':
        return { ...state, hotels: action.hotels };
      case 'set-loading':
        return { ...state, loading: action.loading };
      case 'set-isauthenticated':
        return { ...state, isAuthenticated: action.isAuthenticated };

      default:
        throw new Error('Nie ma takiej akcji: ', action.type);
    }
  };
  const initialState = {
    hotels: [],
    loading: true,
    theme: 'danger',
    isAuthenticated: false,
  };
  // dispatch - wysylaja jakas informacje,
  //korzysta z 2 parametrow (1 to jakas funkcja, 2 to wartosc domyslna  )
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeTheme = () => {
    dispatch({ type: 'change-theme' });
  };

  const searchHandler = (term) => {
    console.log('szukaj z app', term);
    const newHotels = [...backendHotels].filter((x) =>
      x.name.toLowerCase().includes(term.toLowerCase())
    );

    // setHotels(newHotels);
    dispatch({ type: 'set-hotels', hotels: newHotels });
  };

  useEffect(() => {
    setTimeout(() => {
      // setHotels(backendHotels);
      // setLoading(false);
      dispatch({ type: 'set-hotels', hotels: backendHotels });
      dispatch({ type: 'set-loading', loading: false });
    }, 1000);
  }, []);

  const header = (
    <Header>
      <Searchbar onSearch={(term) => searchHandler(term)} />
      <ThemeButton onChange={changeTheme} />
    </Header>
  );
  const content = state.loading ? (
    <LoadingIcon />
  ) : (
    <Hotels hotels={state.hotels} />
  );
  const menu = <Menu />;
  const footer = <Footer />;
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        // login: () => setIsAuthenticated(true),
        login: () =>
          dispatch({ type: 'set-isauthenticated', isAuthenticated: true }),
        // logout: () => setIsAuthenticated(false),
        logout: () =>
          dispatch({ type: 'set-isauthenticated', isAuthenticated: false }),
      }}
    >
      <ThemeContext.Provider
        value={{
          color: state.theme,
          changeTheme: changeTheme,
        }}
      >
        <Layout header={header} menu={menu} content={content} footer={footer} />
      </ThemeContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
