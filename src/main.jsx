import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.jsx";
// import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
// import {
//   Route,
//   RouterProvider,
//   createBrowserRouter,
//   createRoutesFromElements,
// } from "react-router-dom";
// import Routes from "./components/routes/Routes.jsx";
// import Home from "./pages/home/Home.jsx";
// import About from "./pages/about/About.jsx";
// import Signup from "./pages/Login&SignUp/Signup.jsx";
// import Login from "./pages/Login&SignUp/Login.jsx";
// import Details from "./pages/details/Details.jsx";
// import Cart from "./pages/cart/Cart.jsx";
// import CategoryPage from "./pages/category/CategoryPage.jsx";
// import Explore from "./pages/explore/Explore.jsx";
// import PageNotFound from "./pages/404/PageNotFound.jsx";
// import { auth } from "./components/firebase/firebase.js";
// const [user, setUser] = useState();
// useEffect(() => {
//   auth.onAuthStateChanged((user) => {
//     setUser(user);
//   });
// });
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Routes />}>
//       <Route path="" element={ user ? <Home /> : <Login />} />
//       <Route path="/:category/:id" element={<Details />} />
//       <Route path="about" element={<About />} />
//       <Route path="app" element={<App />} />
//       <Route path="signup" element={<Signup />} />
//       <Route path="login" element={<Login />} />
//       <Route path="bag" element={<Cart />} />
//       <Route path="category/:categoryName" element={<CategoryPage />} />
//       <Route path="explore" element={<Explore />} />
//       <Route path="*" element={<PageNotFound />} />
//     </Route>
//   )
// );
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        {/* <RouterProvider router={router}> */}
        <App />
        {/* </RouterProvider> */}
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
