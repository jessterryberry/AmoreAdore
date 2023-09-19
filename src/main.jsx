import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import AllProducts from './components/AllProducts.jsx';
import BookDetails from './components/BookDetails.jsx';
import Layout from './Layout.jsx';
import AboutUs from './components/AboutUs.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "all-products",
        element: <AllProducts />,
      },
      {
        path: "book-details",
        element: <BookDetails />,
      },
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
