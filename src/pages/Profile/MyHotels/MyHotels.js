import { Link, useRouteMatch } from 'react-router-dom';

export default function MyHotels(props) {
  const { url } = useRouteMatch();

  return (
    <div>
      <p>Nie masz jeszcze zadnego hotelu</p>
      <Link to={`${url}/dodaj`} className='btn btn-primary'>
        Dodaj hotel
      </Link>
    </div>
  );
}
