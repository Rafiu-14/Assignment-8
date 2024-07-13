import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";  
import './index.css'
import Root from './Components/Routes/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import ListedBook from './Components/listedBook/ListedBook';
import Page2read from './Components/Page2read/Page2read';
import Home from './Components/Home/Home';
import BookDetails from './Components/BookDetails/BookDetails';
import SignIN from './Components/SignIN/SignIN';
import SignUp from './Components/SignUp/SignUp';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: "/listedBooks",
        element: <ListedBook></ListedBook>
      },
      {
        path: "/page2read",
        element: <Page2read></Page2read>
      },
      {
        path: "/sign-in",
        element: <SignIN></SignIN>
      },
      {
        path:"/sign-up",
        element: <SignUp></SignUp>
      },
      {
        path:'/books/:bookId',
        element: <BookDetails></BookDetails>,
        loader:() => fetch('/books.json')
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
