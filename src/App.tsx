import "react-toastify/dist/ReactToastify.css";
import "./scss/App.scss";

import React, { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import ProtectedRoute from "./route/ProtectedRoute";
import UnauthorizedRoute from "./route/UnauthorizedRoute";
import AuthLayout from "./components/authentication/AuthLayout";
import LoadingSpinner from "./components/UI/loadingSpinner/LoadingSpinner";
// import CategoryEdit from "./pages/category/CategoryEdit";

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Categories = React.lazy(() => import("./pages/category/Categories"));
const Blogs = React.lazy(() => import("./pages/blog/Blogs"));
const BlogAdd = React.lazy(() => import("./pages/blog/BlogAdd"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const BlankPage = React.lazy(() => import("./pages/BlankPage"));
const Login = React.lazy(() => import("./pages/Login"));
const ForgetPassword = React.lazy(() => import("./pages/ForgetPassword"));
const Register = React.lazy(() => import("./pages/Register"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<MainLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route
                  path="/add-blog"
                  element={<BlogAdd />}
                />
                <Route path="/comment" element={<BlankPage />} />
                <Route path="/tags" element={<BlankPage />} />
              </Route>
            </Route>
            <Route element={<UnauthorizedRoute />}>
              <Route element={<AuthLayout type="login" />}>
                <Route path="/login" element={<Login />} />
              </Route>
              <Route element={<AuthLayout type="forget-password" />}>
                <Route path="/forget-password" element={<ForgetPassword />} />
              </Route>
              <Route element={<AuthLayout type="register" />}>
                <Route path="/register" element={<Register />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
