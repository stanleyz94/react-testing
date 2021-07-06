import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import styles from './Hotel.module.css';
import hotelImg from '../../../assets/images/hotel.jpg';
import ThemeContext from '../../../context/ThemeContext';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';
import useWebsiteTitle from '../../../hooks/useWebsiteTitle';
const propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  missing: PropTypes.bool,
};
const defaultProps = {
  missing: false,
};
function Hotel(props) {
  const [auth] = useAuth();
  const theme = useContext(ThemeContext);
  const setTitle = useWebsiteTitle();
  const clickHandler = (e) => {
    e.preventDefault();
    props.onOpen(props);
  };

  return (
    <div className={`card ${styles.hotel}`}>
      <div className='card-body'>
        <div className='row'>
          <div className='col-4'>
            <img src={hotelImg} alt='' className='img-fluid img-thumbnail' />
          </div>
          <div className='col-8'>
            <div className='row'>
              <div className='col'>
                <p className={styles.title}>{props.name}</p>
                <span className='badge badge-light'>{props.city}</span>
              </div>
              <div className='col text-right'>
                <h5>Ocena: {props.rating}</h5>
                <Link
                  to={`/hotele/${props.id}`}
                  className={`btn btn-${theme.color} mt-2 px-4`}
                >
                  Pokaż
                </Link>
                {/* <a
                  href='#'
                    onClick={clickHandler}
                ></a> */}
              </div>
            </div>
          </div>

          <div className='col-12'>
            <p className={styles.description}>{props.description}</p>

            {auth ? (
              <p className='mt-2'>Dostępność: 4 pokoje</p>
            ) : (
              <p className='mt-2'>Zaloguj</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
Hotel.propTypes = propTypes;
Hotel.defaultProps = defaultProps;

export default Hotel;
