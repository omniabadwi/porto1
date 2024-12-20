import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
// import SingleBlogPage from "./pages/singleBlogPage/SingleBlogPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Login from "./pages/login/login";
import RegisterPage from "./pages/registerPage/registerPage";
import SingleProductPage from "./pages/singleProductPage/SingleProductPage";
import FavouritePage from "./pages/favouritePage/FavouritePage";
import CartPage from "./pages/cartPage/CartPage";
import HomePage from "./pages/homePage/HomePage";


export default function App() {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
              refetchOnWindowFocus:false
          }
      }
  });
    const Routes = createBrowserRouter([
        { index: true, element: <HomePage /> },
        {

            path: "/",
            element: <Layout />,
            children: [
                { path: ":documentId", element: <SingleProductPage/> },
                { path: "login", element: <Login /> },
                { path: "register", element: <RegisterPage /> },
                { path: "fav", element: <FavouritePage /> },
                { path: "cart", element: <CartPage/> },
            ],
        },
        // { path: "pop", element: <Popup/>},
    ]);
    return (
        
       <QueryClientProvider client={queryClient}>
            
            <RouterProvider router={Routes}>
                
                
            </RouterProvider>
        </QueryClientProvider>
    );
}
