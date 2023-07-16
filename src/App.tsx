import Layout from "@/layout/Layout";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ResumePage from "./pages/home/resume/ResumePage";

export enum RoutePath {
  HOME = "/",
  RESUME = "/resume",
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* <Route path={RoutePath.HOME} element={<HomePage />} /> */}
          <Route path={"*"} element={<Navigate to="/" replace />} />
          <Route path={RoutePath.RESUME} element={<ResumePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
