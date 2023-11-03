import { Outlet } from "react-router-dom";
import Navber from "./Navber";
import Footer from "../../page/Footer";


const MainLayout = () => {

  return (
   <div>
        <Navber></Navber>
        <div className="container m-auto">
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
   </div>
  );
};

export default MainLayout;
