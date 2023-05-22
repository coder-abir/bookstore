/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Header from "./components/Header.jsx";
import Books from "./components/Books.jsx";
import BookDetails from "./components/BookDetails.jsx";
import LoadingSpinner from "./components/LoadingSpinner.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "books",
        element: <Books></Books>,
        loader:() => fetch('https://api.itbook.store/1.0/new')
      },
      {
        path:'books/:bookId',
        element:<BookDetails></BookDetails>,
        loader:({params})=>fetch(`https://api.itbook.store/1.0/books/${params.bookId}`)
      },
      {
        path: "about",
        element: <About></About>,
        
      },
      {
        path:'loader',
        element:<LoadingSpinner></LoadingSpinner>
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
