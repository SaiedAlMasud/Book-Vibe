import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router/dom";
import { router } from './routes/Routes.jsx';
import './index.css'
import BookProvider from './context/BookContext.jsx';
 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookProvider>
      <RouterProvider router={router} />
    </BookProvider>
  </StrictMode>,
)
