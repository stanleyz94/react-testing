import React, { useContext, useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../../../context/ThemeContext';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
const propTypes = {
  onSearch: PropTypes.func.isRequired,
};

function Searchbar(props) {
  const [term, setTerm] = useState('');
  const theme = useContext(ThemeContext);
  const inputRef = useRef(null);
  const history = useHistory();
  const search = () => {
    history.push(`/wyszukaj/${term}`);
  };

  const onKeyDownHandler = (e) => {
    if (e.key === 'Enter') {
      search();
    }
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    focusInput();
  }, []);

  return (
    <div className='d-flex'>
      <input
        ref={inputRef}
        value={term}
        onKeyDown={onKeyDownHandler}
        onChange={(e) => setTerm(e.target.value)}
        // style={{
        //   backgroundColor: 'white',
        // }}
        className='form-control search'
        type='text'
        placeholder='Szukaj...'
      ></input>

      <button onClick={search} className={`ml-1 btn btn-${theme.color}`}>
        Szukaj
      </button>
    </div>
  );
}

Searchbar.propTypes = propTypes;
export default Searchbar;
