import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../../../context/ThemeContext';
const propTypes = {
  onSearch: PropTypes.func.isRequired,
};

function Searchbar(props) {
  const [term, setTerm] = useState('');
  const theme = 'primary';
  const search = () => {
    // console.log('szukaj', term);
    props.onSearch(term);
  };

  const onKeyDownHandler = (e) => {
    if (e.key === 'Enter') {
      search();
    }
  };

  return (
    <div className='d-flex'>
      <input
        value={term}
        onKeyDown={onKeyDownHandler}
        onChange={(e) => setTerm(e.target.value)}
        // style={{
        //   backgroundColor: 'white',
        // }}
        className='form-control'
        type='text'
        placeholder='Szukaj...'
      ></input>
      <ThemeContext.Consumer>
        {({ theme }) => (
          <button onClick={search} className={`ml-1 btn btn-${theme}`}>
            Szukaj
          </button>
        )}
      </ThemeContext.Consumer>
    </div>
  );
}

Searchbar.propTypes = propTypes;
export default Searchbar;
