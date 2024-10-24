import { createContext, useLayoutEffect, useState } from "react";
import { BrowserRouter, Routes } from "react-router-dom";

export enum RoutePath {
  HOME = "/",
  RESUME = "/resume",
  PRINTABLE = "/printable",
}

type LayoutContextType = {
  windowWidth: number;
};

export const LayoutContext = createContext<LayoutContextType>({
  windowWidth: 0,
});

function App() {
  const [windowWidth, setWindowWidth] = useState(0);

  useLayoutEffect(() => {
    const updateWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateWidth);
    updateWidth();
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <LayoutContext.Provider
      value={{
        windowWidth,
      }}
    >
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
    </LayoutContext.Provider>
  );
}

export default App;
