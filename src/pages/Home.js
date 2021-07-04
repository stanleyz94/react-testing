import { useEffect, useState, useCallback } from 'react';
import Hotels from '../components/Hotels/Hotels';
import BestHotel from '../components/Hotels/BestHotel/BestHotel';
import LastHotel from '../components/Hotels/LastHotel/LastHotel';
import useLocalStorage from '../hooks/useLocalStorage';
import useWebsiteTitle from '../hooks/useWebsiteTitle';
import LoadingIcon from '../components/UI/LoadingIcon/LoadingIcon';

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

export default function Home(props) {
  useWebsiteTitle('Strona główna');
  const [lastHotel, setLastHotel] = useLocalStorage('last-hotel', null);

  const [loading, setLoading] = useState(true);
  const [hotels, setHotels] = useState([]);

  const openHotel = (hotel) => {
    setLastHotel(hotel);
  };

  const removeLastHotel = () => {
    setLastHotel(null);
  };

  const getBestHotel = useCallback(() => {
    if (hotels.length) {
      return null;
    } else {
      return hotels.sort((a, b) => (a.rating > b.rating ? -1 : 1))[0];
    }
  }, [hotels]);

  useEffect(() => {
    setTimeout(() => {
      setHotels(backendHotels);
      setLoading(false);
    }, 1000);
  }, []);

  return loading ? (
    <LoadingIcon />
  ) : (
    <>
      {lastHotel ? (
        <LastHotel {...lastHotel} onRemove={removeLastHotel} />
      ) : null}
      {getBestHotel() ? <BestHotel getHotel={getBestHotel} /> : null}
      <Hotels onOpen={openHotel} hotels={hotels} />
    </>
  );
}
