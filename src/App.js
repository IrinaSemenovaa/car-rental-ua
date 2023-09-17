import React, { Suspense, lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Header from "./components/Navigation/Navigation";

const HomePage = lazy(() => import("./Pages/HomePage"));
const CatalogPage = lazy(() => import("./Pages/CatalogPage"));
const FavoritesPage = lazy(() => import("./Pages/FavoritesPage"));

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/catalog"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <CatalogPage />
            </Suspense>
          }
        />
        <Route
          path="/favorites"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <FavoritesPage />
            </Suspense>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
