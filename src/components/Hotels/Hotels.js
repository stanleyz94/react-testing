import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import Hotel from './Hotel/Hotel';
import styles from './Hotels.module.css';

const propTypes = {
  hotels: PropTypes.array.isRequired,
};

const slowFunction = (count) => {
  for (let i = 0; i < 1200000000; i++) {}
  return count;
};

function Hotels(props) {
  //chce uruchomic ta funkcje gdy 'props.hotels.length' sie zmieni
  const count = useMemo(() => {
    return slowFunction(props.hotels.length);
  }, [props.hotels.length]);
  useEffect(() => {
    console.log('hotels redners');
  });

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Oferty ({count})</h2>
      {props.hotels.map((hotel) => (
        <Hotel key={hotel.id} {...hotel} />
      ))}
    </div>
  );
}

// class Hotels extends Component {
//   componentDidUpdate() {
//     console.log('hotels render');
//   }

//   // po aktualizacji
//   shouldComponentUpdate(nextProps, nextState) {
//     if (this.props.hotels === nextProps.hotels) {
//       return false;
//     }
//     return true;
//   }

//   render() {
//     return (
//       <div className={styles.container}>
//         <h2 className={styles.title}></h2>
//         {this.props.hotels.map((hotel) => (
//           <Hotel key={hotel.id} {...hotel} theme={this.context} />
//         ))}
//       </div>
//     );
//   }
// }

Hotels.propTypes = propTypes;

const areEqual = (prevProps, nextProps) => {
  return prevProps.hotels === nextProps.hotels;
};
// export default React.memo(Hotels, areEqual);

export default Hotels;
