import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import LoadingSpinner from "./components/UI/loadingSpinner/LoadingSpinner";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./scss/App.scss";
import ProtectedRoute from "./route/ProtectedRoute";
import UnauthorizedRoute from "./route/UnauthorizedRoute";

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Customers = React.lazy(() => import("./pages/Customers"));
const CustomerEdit = React.lazy(() => import("./pages/CustomerEdit"));
const Products = React.lazy(() => import("./pages/Products"));
const ProductEdit = React.lazy(() => import("./pages/ProductEdit"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const BlankPage = React.lazy(() => import("./pages/BlankPage"));
const Login = React.lazy(() => import("./pages/Login"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<MainLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="/customers" element={<Customers />} />
                <Route
                  path="/customers/:customerId"
                  element={<CustomerEdit />}
                />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:productId" element={<ProductEdit />} />
                <Route path="/orders" element={<BlankPage />} />
                <Route path="/analytics" element={<BlankPage />} />
                <Route path="/discount" element={<BlankPage />} />
                <Route path="/inventory" element={<BlankPage />} />
              </Route>
            </Route>
            <Route element={<UnauthorizedRoute />}>
              <Route path="/login" element={<Login />} />
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
