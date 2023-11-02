import { Outlet } from "react-router-dom";
import Navber from "./Navber";


const MainLayout = () => {

  return (
   <div>
        <Navber></Navber>
        <div className="container m-auto">
            <Outlet></Outlet>
        </div>
   </div>
  );
};

export default MainLayout;
