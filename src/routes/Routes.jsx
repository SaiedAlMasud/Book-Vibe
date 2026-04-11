import { createBrowserRouter } from 'react-router';
import MainLayout from '../layout/MainLayout.jsx';
import Homepage from '../pages/homepage/Homepage.jsx';
import Books from '../pages/books/Books.jsx';
import Errorpage from '../pages/errorpage/Errorpage.jsx';
import BookDetails from '../pages/bookdetails/BookDetails.jsx';
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
      },
      {
        path: "/bookDetails/:id",
        element: <BookDetails/>,
        loader: ({params}) => fetch("/booksData.json").then(res => res.json()).then(books => books.find(b => String(b.bookId) === params.id))
      }
    ],
    errorElement: <Errorpage/>
  }
]);