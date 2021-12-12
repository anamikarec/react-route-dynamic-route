import React from 'react';
import {Route} from "react-router-dom"
import Products from "../pages/Products"
import About from "../pages/About"
import Home from "../pages/Home"
import ProductDetails from "../pages/ProductDetails";
import Admin from "../pages/Admin"
const AllRoutes = () => {
    return (
        <div>
        <Route exact path="/products">
        <Products/>
        </Route>
        <Route exact path="/">
        <Home/>
        </Route>
        <Route exact path="/about">
        <About/>
        </Route>
        <Route exact path="/products/:id">
        <ProductDetails />
        </Route>
        <Route exact path="/admin">
        <Admin />
        </Route>
        </div>
    )
}
export default AllRoutes;