
import { Link, Navigate, useNavigate } from "react-router-dom";
import Navber from "../component/layout/Navber";
import useAuth from "../hook/useAuth";
import { useState } from "react";
import toast from "react-hot-toast";

const Login = () => {

    const {loginUser, user} = useAuth()
    const navigate = useNavigate()

    const [email, setEmail] = useState(0)
    const [password, setPassword] = useState(0)

    const handleLoginUser = async (e) => {
        e.preventDefault()
            toast.success('Login Proccess', {toast: true})
        try {
            await loginUser(email, password)
            toast.success('Login Successful', {toast: true})
            navigate('/home')
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
              <form onSubmit={handleLoginUser} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    onBlur={(e)=> setEmail(e.target.value)}
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
                    onBlur={(e)=> setPassword(e.target.value)}
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input type="submit" className="btn" value='Login'></input>
                </div>
              </form>
              <Link to='/register' className="text-center pb-4">Register</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
