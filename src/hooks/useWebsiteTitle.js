import { useEffect } from 'react';

export default function useWebsiteTitle(title) {
  useEffect(() => {}, [title]);
  document.title = title;
}
