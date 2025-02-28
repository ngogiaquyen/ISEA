import { createContext, useState, useEffect } from 'react';

const ActiveBoardContext = createContext(); // Thống nhất tên là "ActiveBoardContext"

function ActiveBoardProvider({ children }) {
  const [isCollapsedBoard, setIsCollapsedBoard] = useState(false); // Sửa cả chính tả từ "Broard" thành "Board"
  const [isShowSidebar, setIsShowSidebar] = useState(false);

  const toggleBroard = (isCollapse) => {
    if (isCollapse !== undefined) {
      localStorage.setItem('isCollapsedBoard', isCollapse);
      setIsCollapsedBoard(isCollapse);
    } else{
      setIsCollapsedBoard((prev) => {
          localStorage.setItem('isCollapsedBoard', !prev);
          return !prev;
      });
    }
  };

  const toggleSidebar = (isShow) => {
    if (isShow !== undefined) {
      localStorage.setItem('isShowSidebar', isShow);
      setIsShowSidebar(isShow);
    } else{
      setIsShowSidebar((prev) => {
          localStorage.setItem('isShowSidebar', !prev);
          return !prev;
      });
    }
  };
    useEffect(() => {
    const flagBroad = localStorage.getItem('isCollapsedBoard');
    setIsCollapsedBoard(JSON.parse(flagBroad));

    const flagSidebar = localStorage.getItem('isShowSidebar');
    setIsShowSidebar(JSON.parse(flagSidebar));
  }, []);

  return (
    <ActiveBoardContext.Provider value={{ isCollapsedBoard, setIsCollapsedBoard, toggleBroard, isShowSidebar, setIsShowSidebar,toggleSidebar }}>
      {children}
    </ActiveBoardContext.Provider>
  );
}

export { ActiveBoardContext, ActiveBoardProvider };
