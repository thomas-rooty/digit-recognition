import {createContext, useContext, useState} from "react";

const ToolsContext = createContext();

// eslint-disable-next-line react/prop-types
export const ToolsProvider = ({children}) => {

  const [pencilWidth, setPencilWidth] = useState(8);
  const [backgroundColor, setBackgroundColor] = useState("#000000");
  const [widthSize, setWidthSize] = useState(300);
  const [heigthSize, setHeigthSize] = useState(300);
  const [pencilColor, setPencilColor] = useState("#ffffff");

  return (
    <ToolsContext.Provider value={{
      pencilWidth,
      setPencilWidth,
      backgroundColor,
      setBackgroundColor,
      widthSize,
      setWidthSize,
      heigthSize,
      setHeigthSize,
      pencilColor,
      setPencilColor
    }}>
      {children}
    </ToolsContext.Provider>
  )
};

export const useTools = () => {
  return useContext(ToolsContext);
}