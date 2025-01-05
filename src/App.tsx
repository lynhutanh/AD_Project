import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/Layout";
import Home from "./components/Home/Home";
import Login from "./components/Auth/Login";
import HomePage from "./components/Home/Home";
import Register from "./components/Auth/Registry";
import { HelmetProvider } from "react-helmet-async";

const App = () => {
  return (
    <HelmetProvider>
      <div className="relative">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<HomePage />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

        </Routes>
        <ToastContainer autoClose={3000} />
      </div>
    </HelmetProvider>
  );
};

export default App;
