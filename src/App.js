import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import home from "./pages/home/home";
import products from "./pages/products/products";
import product from "./pages/product/product";
import navbar from "./components/navbar/navbar";
import footer from "./components/footer/footer";

const layout = () => {
  return (
    <div className="app">
      <navbar />
      <Outlet />
      <footer />
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <layout />,
    children: [
      {
        path: "/",
        element: <home />,
      },
      {
        path: "/products/:id",
        element: <products />,
      },
      {
        path: "/product/:id",
        element: <product />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
