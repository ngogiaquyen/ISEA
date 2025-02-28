import { createContext, useState } from "react";

const ActiveBoardContext = createContext(); // Thống nhất tên là "ActiveBoardContext"

function ActiveBoardProvider({ children }) {
  const [isCollapsedBoard, setIsCollapsedBoard] = useState(false); // Sửa cả chính tả từ "Broard" thành "Board"

  return (
    <ActiveBoardContext.Provider value={{ isCollapsedBoard, setIsCollapsedBoard }}>
      {children}
    </ActiveBoardContext.Provider>
  );
}

export { ActiveBoardContext, ActiveBoardProvider };
