import { createContext, useState } from 'react';
import { useEffect } from 'react';

const MenuSelectIdContext = createContext();

function MenuSelectIdProvider({ children }) {
  const [menuSelectId, setMenuSelectId] = useState({
    sidebar: 1,
    board: 1,
  });

  useEffect(() => {
    const objId = JSON.parse(localStorage.getItem('menuSelectId'));
    console.log('first: ', objId);
    if (objId) setMenuSelectId(objId);
  }, []);

  const handleChangeMenuSelectId = (props) => {
    setMenuSelectId((prev) => {
      console.log({ ...prev, ...props });
      localStorage.setItem('menuSelectId', JSON.stringify({ ...prev, ...props }));
      return { ...prev, ...props };
    });
  };

  return (
    <MenuSelectIdContext.Provider value={{ menuSelectId, handleChangeMenuSelectId }}>
      {children}
    </MenuSelectIdContext.Provider>
  );
}

export { MenuSelectIdContext, MenuSelectIdProvider };
