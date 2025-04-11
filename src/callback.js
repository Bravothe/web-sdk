import { useEffect } from 'react';

const Callback = () => {
  useEffect(() => {
    // Check document.cookie for _EV_DEV_MUID
    const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
      const [key, value] = cookie.split('=');
      acc[key] = value;
      return acc;
    }, {});
    const muid = cookies['__EV_DEV_MUID'];
    if (muid && window.opener) {
      window.opener.postMessage(
        { name: '__EV_DEV_MUID', value: muid },
        'https://efs-gp9p6.ondigitalocean.app/'
      );
      window.close();
    }
  }, []);

  return <div>Processing login...</div>;
};

export default Callback;