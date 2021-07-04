import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingIcon from '../components/UI/LoadingIcon/LoadingIcon';

function Hotel(props) {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);

  const [loading, setLoading] = useState(true);
  const fetchHotel = () => {
    setHotel({
      id: 2,
      name: 'Dębowy',
      city: 'Lublin',
      rating: 8.8,
      description:
        ' ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat',
      image: '',
    });
    setLoading(false);
  };

  useEffect(() => {
    setTimeout(() => {
      fetchHotel();
    }, 2000);
  }, []);

  return loading ? <LoadingIcon /> : <h1>To jest jakiś hotel: {hotel.name}</h1>;
}

export default Hotel;
