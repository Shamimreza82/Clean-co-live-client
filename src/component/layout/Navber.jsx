import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../../hook/useAuth";

const Navber = () => {

  const {user, logeOut } = useAuth()


  const handleLogeOut = () => {
    logeOut()
    .then(()=> {
      console.log("sing Out SuccessFull");
    })
    .catch(err => {
      console.log(err);
    })
  }


  return (
    <div className="bg-slate-800 text-white">
      <div className="drawer container m-auto ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar ">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2">Chinning</div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal gap-5">
                {/* Navbar menu content here */}
                <li>
                  <NavLink
                    to="/home"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    About
                  </NavLink>
                </li>
                {user ? <li>
                  <NavLink
                    onClick={handleLogeOut}
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    Logout
                  </NavLink>
                </li> : <li>
                  <NavLink
                    to="/login"
                   
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    Login
                  </NavLink>
                </li> }
                
             
               
              </ul>
            </div>
          </div>
          {/* Page content here */}
        </div>
        <div className="drawer-side text-black">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200">
            {/* Sidebar content here */}
            <li>
                  <NavLink
                    to="/about"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/login"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    Login
                  </NavLink>
                </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navber;
