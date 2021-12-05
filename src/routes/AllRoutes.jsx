
import React from "react";import { Route } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import UserDetails from "../pages/UserDetails";
import Users from "../pages/Users";

function AllRoutes() {
  return (
    <div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/products">
        <Users />
      </Route>
      <Route exact path="/products/:id">
        <UserDetails />
      </Route>

      <Route exact path="/about">
        <About />
      </Route>
    </div>
  );
}

export default AllRoutes;
