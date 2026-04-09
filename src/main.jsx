import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from './App.jsx'
import './index.css'
const router = createBrowserRouter([
  {
    path: "/",
    element: "Homepage",
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
      <App />
  </StrictMode>,
)
