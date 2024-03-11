import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./views/LandingPage/js/LandingPage";

export default function ImdbAppRoutes() {
  return (
    <Suspense fallback={<div></div>}>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
      </Routes>
    </Suspense>
  );
}
