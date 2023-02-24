import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HelloWorld from "./components/HelloWorld";
import ReviewForm from "./components/ReviewForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HelloWorld />,
    children: [],
  },
  {
    path: "/leavereview",
    element: <ReviewForm />,
    children: [],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
