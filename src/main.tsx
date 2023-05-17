import React from "react";
import ReactDOM from "react-dom/client";
import { Appbar } from "./components/appbar";
import App from "./App";
import { ReactQuery } from "./useQuery";
import { CustomHook } from "./customhook";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Error</h1>,
    children: [
      {
        path: "/ReactQuery",
        element: <ReactQuery />,
      },
      {
        path: "/CustomHook",
        element: <CustomHook />,
      },
      {
        path: "/GraphQL",
        element: <h1>GraphQL</h1>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
