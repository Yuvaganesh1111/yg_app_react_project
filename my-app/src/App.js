import logo from "./logo.svg";
import "./App.css";
import "./style/SlideMenu_Style.css";
import "./style/DashBoard_Style.css";
import SideMenu from "./component/SideMenu";
import DashBoard from "./pages/DashBoard";
import { Route, Routes } from "react-router";
import Product from "./pages/Product";
import Customer from "./pages/Customer";
import Income from "./pages/Income";
import Promote from "./pages/Promote";
import Help from "./pages/Help";



function App() {
  

  return (
    <>
      
      <SideMenu/> 
      
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/product" element={<Product />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/income" element={<Income />} />
          <Route path="/promote" element={<Promote/>} />
          <Route path="/help" element={<Help />} />




        </Routes>
        
      
    </>
  );
}

export default App;
