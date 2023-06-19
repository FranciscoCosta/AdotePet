
import './App.css';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Home, PageNotFound, Register, Login, Adopt, Profile } from './pages/index';
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
          path: "/adopt", element: <Adopt />
        },
        {
          path: "/profile", element: <Profile />
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
