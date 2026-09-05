import Layout from "@/layout/Layout";
import { createContext, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PrintablePage from "./pages/printable/PrintablePage";
import ResumePage from "./pages/resume/ResumePage";

type LayoutContextType = {
  windowWidth: number;
};

export const LayoutContext = createContext<LayoutContextType>({
  windowWidth: 0,
});

function App() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
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
      <Routes>
        {["/", "/ko"].map((path) => (
          <Route key={path} path={path} caseSensitive element={<Layout />}>
            <Route index element={<ResumePage />} />
            <Route path="resume" element={<ResumePage />} />
            <Route path="printable" element={<PrintablePage />} />
          </Route>
        ))}
        <Route
          path="/ko/*"
          caseSensitive
          element={<Navigate to="/ko/resume/" replace />}
        />
        <Route path="*" element={<Navigate to="/resume/" replace />} />
      </Routes>
    </LayoutContext.Provider>
  );
}

export default App;
