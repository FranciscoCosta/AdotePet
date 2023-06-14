
import './App.css'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
function App() {

  const Layout = () => {
    return (
        <>
          <Outlet />
        </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <div>Home</div> },
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
