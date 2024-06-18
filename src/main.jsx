import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import NotFoundPage from "./NotFoundPage.jsx";
import PokemonPage from './components/PokemonPage/PokemonPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/page/1" />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/page/:pageNumber",
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/pokemon/:pokemonName",
    element: <PokemonPage />,
    errorElement: <NotFoundPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
