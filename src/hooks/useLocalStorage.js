import { useState } from 'react';

export default function useLocalStorage(key, defaultValue) {
  const [state, setState] = useState(() => {
    const storageValue = window.localStorage.getItem(key);

    if (storageValue) {
      return JSON.parse(storageValue);
    }

    return defaultValue;
  });
  const setValue = (val) => {
    setState(val);
    window.localStorage.setItem(key, JSON.stringify(val));
  };

  return [state, setValue];
}
