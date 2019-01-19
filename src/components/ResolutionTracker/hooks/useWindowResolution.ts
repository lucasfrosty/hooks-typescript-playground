import {useState, useEffect} from 'react';

interface Resolution {
  width: number;
  height: number;
}

function useWindowResolution(): Resolution {
  const [width, setWidth] = useState<Resolution['width']>(window.innerWidth);
  const [height, setHeight] = useState<Resolution['height']>(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  });

  return {width, height}
}

export default useWindowResolution;
