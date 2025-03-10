import { createContext, useEffect, useRef, useState } from 'react';
import HomeToast from '../HomeToast/HomeToast';
import avatar from '../../assets/images/meomeo.jpg';

const HomeContext = createContext();
function HomeProvider({ children }) {
  const [publicUser, setPublicUser] = useState({});
  const [toast, setToast] = useState(null);
<<<<<<< HEAD
  const [showForgotPassForm, setShowForgotPassForm] = useState(false);
=======
>>>>>>> 491052f5e134c5d31969c9a3ba1da07c64fe36f6

  const showToast = (obj) => {
    setToast(null);
    if (obj && typeof obj === 'object') {
      setTimeout(() => {
        setToast(<HomeToast obj={obj} setToast={setToast} />);
      }, 4);
    }
  };

  const SERVER = 'http://localhost/isea/server/';

  const fetchGet = async (endpoit) => {
    try {
      const response = await fetch(SERVER + endpoit, {
        method: 'GET',
        credentials: 'include',
      });

      if (!response.ok) throw new Error(`Status ${response.status}`);

      const data = await response.json();
      return data;
    } catch (e) {
      console.error(e);
      return null;
    }
  };

  const fetchPost = async (endpoit, formData = new FormData()) => {
    try {
      const response = await fetch(SERVER + endpoit, {
        method: 'POST',
        credentials: 'include',
        body: formData,
      });

      if (!response.ok) throw new Error(`Status ${response.status}`);

      const data = await response.json();
      return data;
    } catch (e) {
      console.error(e);
      return null;
    }
  };

  const checkLogin = async () => {
    const user = await fetchPost('user/auth');
    setPublicUser({ ...user, avatar: avatar });
  };
  const checkLoginRef = useRef(checkLogin);

  useEffect(() => {
    checkLoginRef.current();
  }, []);

  return (
<<<<<<< HEAD
    <HomeContext.Provider
      value={{
        publicUser,
        setPublicUser,
        showToast,
        fetchGet,
        fetchPost,
        checkLogin,
        showForgotPassForm,
        setShowForgotPassForm,
      }}
    >
=======
    <HomeContext.Provider value={{ publicUser, setPublicUser, showToast, fetchGet, fetchPost, checkLogin }}>
>>>>>>> 491052f5e134c5d31969c9a3ba1da07c64fe36f6
      {toast}
      {children}
    </HomeContext.Provider>
  );
}

export { HomeContext, HomeProvider };
