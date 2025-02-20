/**
 * A function that returns a React Router component with routes for the home page and a 404 not found page.
 * The routes are wrapped within a Layout component for consistent styling and navigation.
 *
 * @returns {JSX.Element} - A React Router component with routes for the home page and a 404 not found page.
 */

import { Route, Routes } from "react-router-dom";
import { RoutePaths } from "./RoutePaths.jsx";
import { Home } from "../pages/home/HomePage.jsx";
import { NotFound } from "./NotFound.jsx";
import { Layout } from "./Layout.jsx";
import Navbaruser from "../components/Navbaruser.jsx";

export const Router = () => (

  <Routes>
    <Route
      //
      path={RoutePaths.HOME} // URL to the home page
      element={
        // What will be rendered
        <Layout>
          <Navbaruser/>
          <Home />
        </Layout>
      }
    />
    {/* Add more routes here */}
    <Route
      path="*" // localhost:5173/3D 
      element={
        <Layout>
          <Navbaruser/>
          <NotFound />
        </Layout>
      }
    /> 
  </Routes>
);

// <Route path="" element="">
// path prop -> <Route path="/hello" element={<div>hello world!</div>}/> localhost:5173/hello
