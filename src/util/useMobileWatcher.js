import { useState, useEffect } from 'react';

const useMobileWatcher = () => {
  const [mobile, setMobile] = useState(window.innerWidth <= 710);

  useEffect(() => {
    window.onresize = () => {
      setMobile(window.innerWidth <= 710);
    };
  }, [setMobile]);

  return mobile;
};

export default useMobileWatcher;
