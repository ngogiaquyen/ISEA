import { createContext, useEffect, useRef, useState } from 'react';
import HomeToast from '../HomeToast/HomeToast';

const HomeContext = createContext();
function HomeProvider({ children }) {
  const [publicUser, setPublicUser] = useState({});
  const [applicant, setApplicant] = useState({});
  const [candidate, setCandidate] = useState({});
  const [toast, setToast] = useState(null);

  const showToast = (obj) => {
    setToast(null);
    if (obj && typeof obj === 'object') {
      setTimeout(() => {
        setToast(<HomeToast obj={obj} setToast={setToast} />);
      }, 4);
    }
  };

  const fetchGet = async (endpoit) => {
    try {
      const response = await fetch(`http://localhost/isea/server/${endpoit}`, {
        method: 'GET',
        credentials: 'include',
      });

      if (!response.ok) throw new Error(`Status ${response.status}`);

      const data = await response.json();
      return data;
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

  const fetchPost = async (endpoit, formData = new FormData()) => {
    try {
      const response = await fetch(`http://localhost/isea/server/${endpoit}`, {
        method: 'POST',
        credentials: 'include',
        body: formData,
      });

      if (!response.ok) throw new Error(`Status ${response.status}`);

      const data = await response.json();
      return data;
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

  const checkLogin = async () => {
    const user = await fetchPost('user/auth');
    const applicant = user?.id ? await fetchGet(`applicant/read?user=${user?.id}`) : null;
    setPublicUser(user);
    setApplicant(applicant);
    console.log(user);
    console.log(applicant);
  };
  const checkLoginRef = useRef(checkLogin);

  useEffect(() => {
    checkLoginRef.current();
  }, []);

  return (
    <HomeContext.Provider value={{ publicUser, setPublicUser, showToast, fetchGet, fetchPost, checkLogin }}>
      {toast}
      {children}
    </HomeContext.Provider>
  );
}

export { HomeContext, HomeProvider };
