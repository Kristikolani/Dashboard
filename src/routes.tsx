import { createBrowserRouter } from "react-router-dom";
import EditUserComments from "./components/EditUser/EditUserComments";
import EditUserProfile from "./components/EditUser/EditUserProfile";
import EditUserReviews from "./components/EditUser/EditUserReviews";
import AddItem from "./pages/AddItem";
import AuthLayout from "./pages/AuthLayout";
import Catalog from "./pages/Catalog";
import Comments from "./pages/Comments";
import Dashboard from "./pages/Dashboard";
import EditUser from "./pages/EditUser";
import ForgotPassword from "./pages/ForgotPassword";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Reviews from "./pages/Reviews";
import Users from "./pages/Users";
import useUsers from "./hooks/useUsers";

const EditUserProfileWrapper = () => {
  const { data, error } = useUsers();
  console.error(data);
  if (error || !data) return null;
  else return <EditUserProfile users={data?.result} />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "catalog", element: <Catalog /> },
      { path: "users", element: <Users /> },
      { path: "comments", element: <Comments /> },
      { path: "reviews", element: <Reviews /> },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "forgotPassword", element: <ForgotPassword /> },
    ],
  },
  { path: "add_item", element: <AddItem /> },
  {
    path: "edit_user",
    element: <EditUser />,
    children: [
      {
        index: true,
        element: <EditUserProfileWrapper />,
      },
      { path: "profile/:id", element: <EditUserProfileWrapper /> },
      { path: "comments/:id", element: <EditUserComments /> },
      { path: "reviews/:id", element: <EditUserReviews /> },
    ],
  },
]);

export default router;
