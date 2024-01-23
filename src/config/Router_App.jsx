import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Login} from "../pages/Login";
import { Sign } from "../pages/Sign";
import { Home } from "../pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login />} />
      <Route path="/sign" element={<Sign/>} />
    </Route>
  )
);

export const Router_App = () => {
  return <RouterProvider router={router} />;
};
