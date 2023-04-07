import { React } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProduct from "./Demoproject/components/AddProduct";
import Registration from "./Demoproject/components/Registration";
import Cart from "./Demoproject/components/Cart";
import Home from "./Demoproject/pages/Home";
import CategoryBook from "./Demoproject/components/CategoryBook";
import Login from "./Demoproject/components/Login";
import About from "./Demoproject/pages/About";
import ReadMore from "./Demoproject/components/ReadMore";
import { GlobalProvider } from "./Demoproject/components/GlobalProvider";

const App = () => {
  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/Register" element={<Registration />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/readmore" element={<ReadMore />} />
            <Route path="/Internet" element={<CategoryBook category="Internet" />} />
            <Route path="/Java" element={<CategoryBook category={"Java"} />} />
            <Route path="/PowerBuilder" element={<CategoryBook category={"PowerBuilder"} />} />
            <Route path="/Programming" element={<CategoryBook category={"Programming"} />} />
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  );
};

export default App;
