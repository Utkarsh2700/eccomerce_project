import { Container } from "@chakra-ui/react";
import { Button } from "./components/ui/button";
import React, { useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
// import App from "./App.jsx";
import "./index.css";
// import { Provider } from "react-redux";
// import { store } from "./store/store.js";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Routes from "./components/routes/Routes";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import Signup from "./pages/Login&SignUp/Signup.jsx";
import Login from "./pages/Login&SignUp/Login.jsx";
import Details from "./pages/details/Details.jsx";
import Cart from "./pages/cart/Cart.jsx";
import CategoryPage from "./pages/category/CategoryPage.jsx";
import Explore from "./pages/explore/Explore.jsx";
import PageNotFound from "./pages/404/PageNotFound.jsx";
import { auth } from "./components/firebase/firebase.js";
import Search from "./pages/search/Search";
import Wishlist from "./components/wishlist/Wishlist";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Routes />}>
        <Route path="" element={user ? <Home /> : <Login />} />
        <Route path="/:category/:id" element={<Details />} />
        <Route path="about" element={<About />} />
        {/* <Route path="app" element={<App />} /> */}
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="bag" element={<Cart />} />
        <Route path="category/:categoryName" element={<CategoryPage />} />
        <Route path="explore" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="search" element={<Search />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
