import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/main-layout/MainLayout";
import { NoMatch, Success } from "../pages";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<MainLayout />} />
    <Route path="/success" element={<Success />} />
    <Route path="*" element={<NoMatch />} />
  </Routes>
);

export default AppRoutes;
