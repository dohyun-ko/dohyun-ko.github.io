import Layout from "@/layout/Layout";
import { createContext, useLayoutEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PrintablePage from "./pages/home/printable/PrintablePage";
import ResumePage from "./pages/home/resume/ResumePage";

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
        <Routes>
          <Route element={<Layout />}>
            {/* <Route path={RoutePath.HOME} element={<HomePage />} /> */}
            <Route path={"*"} element={<Navigate to="/resume" replace />} />
            <Route path={RoutePath.RESUME} element={<ResumePage />} />
            <Route path={RoutePath.PRINTABLE} element={<PrintablePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LayoutContext.Provider>
  );
}

export default App;
