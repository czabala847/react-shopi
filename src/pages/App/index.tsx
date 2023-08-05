import { BrowserRouter, useRoutes } from "react-router-dom";
import { Home } from "../Home";
import { MyOrders } from "../MyOrders";
import { MyAccount } from "../MyAccount";
import { MyOrder } from "../MyOrder";
import { SignIn } from "../SignIn";
import { NotFound } from "../NotFound";

import { Navbar } from "../../components/Navbar";
import { Layout } from "../../components/Layout";

const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/*", element: <NotFound /> },
  ]);

  return routes;
};

export function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AppRoutes />
        <Navbar />
      </Layout>
    </BrowserRouter>
  );
}
