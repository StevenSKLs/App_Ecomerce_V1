import { useState } from "react";
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product_Id from "./pages/Product_Id";
import Login from "./pages/Login";
import Purchases from "./pages/Purchases";
import AppNavbar from "./components/AppNavbar";
import LoadingScreen from "./components/LoadingScreen";
import { useSelector } from "react-redux";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Div_end from "./components/Div_end";

function App() {
  const isLoading = useSelector((state) => state.isLoading);

  return (
    <HashRouter>
      <AppNavbar />
      {isLoading && <LoadingScreen />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Product_Id />} />
        <Route path="/login" element={<Login />} />
        
        <Route element={<ProtectedRoutes/>}>
        <Route path="/purchases" element={<Purchases />} />
        </Route>
      </Routes>
      <Div_end/>
    </HashRouter>
  );
}

export default App;
