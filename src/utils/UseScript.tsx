import { useEffect } from 'react';

const useScript = (url: string, defer: (boolean) = false) => {
  useEffect(() => {
    const script = document.createElement('script');

    script.type = 'text/javascript';
    script.src = url;
    script.defer = defer;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [defer, url]);
};

export default useScript;