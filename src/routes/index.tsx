import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Dashboard = lazy(() => import("routes/dashboard"));

const AppRoutes = () => (
  <Suspense fallback={<></>}>
    <Routes>
      <Route path="/" element={<Dashboard />} />

      {/* <Route path="*" element={<Error404 />} /> */}
    </Routes>
  </Suspense>
);

export default AppRoutes;