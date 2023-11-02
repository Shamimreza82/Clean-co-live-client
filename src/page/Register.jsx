import { Link } from "react-router-dom";
import Navber from "../component/layout/Navber";
import { useState } from "react";
import useAuth from "../hook/useAuth";

const Register = () => {
    const {createUser} = useAuth()
    const [email, setEmail] = useState(0)
    const [password, setPassword] = useState(0)

    const handleRegister = async e => {
        e.preventDefault()

        try {
            await createUser (email, password)
                .then(result => {
                    console.log(result.user);
                })
                .catch(err => {
                    console.error(err);
                })
        } catch (error) {
              console.log(error);  
        }
        

    }


  return (
    <div>
      <Navber></Navber>
      <div className="container m-auto">
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
          
            {/* <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div> */}
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <p className="text-center pt-5 text-3xl">Register</p>
              <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    onBlur={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    onBlur={(e) => setPassword(e.target.value)}
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input type="submit" className="btn" value="Register"></input>
                </div>
              </form>
              <Link to="/login" className="text-center pb-4">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
