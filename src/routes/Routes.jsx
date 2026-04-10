import { createBrowserRouter } from 'react-router';
import MainLayout from '../layout/MainLayout.jsx';
import Homepage from '../pages/homepage/Homepage.jsx';
import Books from '../pages/books/Books.jsx';
import Errorpage from '../pages/errorpage/Errorpage.jsx';
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        index: true,
        element: <Homepage/>
      },
      {
        path: "/books",
        element: <Books/>
      }
    ],
    errorElement: <Errorpage/>
  }
]);