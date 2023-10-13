import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store, { saveState } from "./redux/store.js";
import App from "./App.jsx";
import axios from "axios";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Landing from "./pages/Landing.jsx";
import Admin from "./pages/Admin.jsx";

// axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.baseURL = "https://a-solas-pky3-dev.fl0.io";

const router = createHashRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

const Root = () => {
  // hook que permite que al recargar la página se guarde el estado en localStorage
  useEffect(() => {
    window.addEventListener("unload", saveState);
  }, []);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

root.render(<Root />);
