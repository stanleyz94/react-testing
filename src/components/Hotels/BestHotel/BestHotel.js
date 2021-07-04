import { useEffect, useState } from 'react';
import moment from 'moment';
const BestHotel = (props) => {
  const [time, setTime] = useState('');
  const hotel = props.getHotel();
  const endTime = moment().add(23, 'minutes').add(34, 'seconds');

  let interval = null;

  //componentDidMount()

  useEffect(() => {
    interval = setInterval(() => {
      const leftTime = -moment().diff(endTime) / 1000;
      const minutes = Math.floor(leftTime / 60);
      const seconds = Math.floor(leftTime % 60);

      setTime(`${minutes} minut , ${seconds} sekund`);
    }, 1000);
    console.log(endTime);

    // componentWillUnmount() ile kroc nasz komponent zostanie
    // wymontowany wykona sie ponizej funkcja
    return () => {
      clearInterval(interval);
    };
  }, []);

  if (!hotel) {
    return null;
  }
  return (
    <div className='card bg-success text-white'>
      <h6 className='card-header'>Najlepsza oferta!</h6>
      <div className='card-body'>
        <div className='d-flex justify-content-between'>
          <h5 className='cart-title'>{hotel.name}</h5>
          <p>Ocena: {hotel.rating}</p>
        </div>
        <p>Do końca oferty pozostało: {time}</p>
        <a href='#' className='btn btn-sm btn-light'>
          Pokaż
        </a>
      </div>
    </div>
  );
};

export default BestHotel;
