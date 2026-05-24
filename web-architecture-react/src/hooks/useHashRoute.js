import { useState, useEffect } from 'react';

export function useHashRoute() {
  const [route, setRoute] = useState(
    () => window.location.hash.replace('#/', '') || 'home'
  );

  useEffect(() => {
    const onChange = () =>
      setRoute(window.location.hash.replace('#/', '') || 'home');
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  const go = (id) => {
    window.location.hash = '#/' + id;
    window.scrollTo({ top: 0 });
  };

  return [route, go];
}
