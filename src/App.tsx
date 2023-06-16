
import './App.css';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Home, PageNotFound, Register, Login } from './pages/index';
import { Navbar, Footer } from './components/index';
function App() {

  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/", element: <Home />
        },
        {
          path: "/login", element: <Login />
        },
        {
          path: "/register", element: <Register />
        },
        {
          path: "*",
          element: <PageNotFound />,
        },
      ],
    },
  ]);


  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
