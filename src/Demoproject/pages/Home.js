import React, { useContext } from "react";
import AdsBook from "../components/AdsBook";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import ProductSearchbar from "../components/ProductSearchbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer";
import { GlobalContext } from "../components/GlobalProvider";

const Home = () => {
  const { books } = useContext(GlobalContext)
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Login />
      <Navbar />
      <AdsBook />
      <ProductSearchbar />
      <Products books={books} />
      <Footer />
    </>
  );
};

export default Home;