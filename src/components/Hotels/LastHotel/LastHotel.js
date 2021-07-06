import useLocalStorage from '../../../hooks/useLocalStorage';
import { Link } from 'react-router-dom';
function LastHotel(props) {
  // const [hotel, setHotel] = useLocalStorage(null);

  const test = props;
  console.log(test);

  if (!props) {
    return null;
  }

  return (
    <div className='card bg-light'>
      <h6 className='card-header'>
        Ostatnio oglądałeś ten hotel. Wciąż zainteresowany?
      </h6>
      <div className='card-body'>
        <div className='d-flex justify-content-between'>
          <h5 className='cart-title'>{props.name}</h5>
          <span className='cart-title'>{props.city}</span>
        </div>
        <div
          style={{ width: '100px' }}
          className='ml-auto d-flex justify-content-between'
        >
          <Link to={`/hotele/${props.id}`} className='btn btn-sm btn-dark'>
            Tak!
          </Link>
          <a href='#' onClick={props.onRemove} className='btn btn-sm btn-dark'>
            Nie
          </a>
        </div>
      </div>
    </div>
  );
}

export default LastHotel;
