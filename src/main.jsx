import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "/src/styles/main.sass";
import HomePage from "./pages/HomePage/HomePage";
import AddPlant from "./pages/addPlant/AddPlant";
import FirstFive from "/src/pages/FirstFive/FirstFive";
import AllSearch from "/src/pages/Search/AllSearch";
import Search from "/src/pages/Search/Search.jsx";
import Details from "/src/pages/Details/Details.jsx";
import NotFound from "/src/pages/NotFound/Notfound.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Login/Register.jsx";
import OutLetLogin from "./pages/Login/OutLetLogin.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    //Pagina de erro
    //errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        children: [
          {
            path: "",
            element: <FirstFive />,
          },
          {
            path: "/allPlants",
            element: <AllSearch />,
          },
          {
            path: "/search",
            element: <Search />,
          },
          {
            path: "/details",
            element: <Details />,
          },
          {
            path: "/notfound",
            element: <NotFound />,
          },
        ],
      },
      {
        path: "/addPlants",
        element: <AddPlant />,
      },
    ],
  },
  {
    path: "/login",
    element: <OutLetLogin />,
    children: [
      {
        path: "",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
