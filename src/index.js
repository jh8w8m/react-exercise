import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Route from "./Route";
import LazyRenderQueue from "./pages/LazyRenderQueue";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Route/>,
  },
  {
    path: "/test",
    element: <App/>,
  },
  {
    path: "/lazy-render-queue",
    element: <LazyRenderQueue/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);
