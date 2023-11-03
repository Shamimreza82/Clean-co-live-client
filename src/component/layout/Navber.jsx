import { NavLink, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../../hook/useAuth";

const Navber = () => {

  const {user, logeOut } = useAuth()
  const navigate = useNavigate()


  const handleLogeOut = () => {
    logeOut()
    .then(()=> {
      console.log("sing Out SuccessFull");
      navigate('/login')

    })
    .catch(err => {
      console.log(err);
    })
  }


  return (
    <div className="bg-slate-800 text-white">
      <div className="drawer container m-auto items-center ">
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
            <div className="flex-1 px-2 mx-2 text-2xl font-bold">Elite Clean Experts</div>
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
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    Contact Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    Services
                  </NavLink>
                </li>
                {user ? <li>
                  <div className="dropdown dropdown-end p-0">
                      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                          <img src={user?.photoURL} />
                        </div>
                      </label>
                      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                          <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                          </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li onClick={handleLogeOut}><a>Logout</a></li>
                      </ul>
                    </div>
                  {/* <NavLink
                    onClick={handleLogeOut}
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    Logout
                  </NavLink> */}
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
