import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../component/layout/MainLayout";
import About from "../page/About";
import Login from "../page/Login";
import Home from "../page/Home";
import Register from "../page/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AdminLayout from "../component/layout/AdminLayout";
import AddService from "../page/AddService";

const router = createBrowserRouter([
    {
        path: '/', 
        element: <MainLayout></MainLayout>, 
        children: [
            {
                path: '/home', 
                element: <Home></Home>
            }, 
            {
                path: '/about', 
                element: <PrivateRoute>
                            <About></About> 
                         </PrivateRoute> 
            }
        ]
    }, 
    {
        path: '/login', 
        element: <Login></Login>
    },
    {
        path: '/register', 
        element: <Register></Register>
    }, 
    {
        path: '/admin', 
        element: <AdminLayout></AdminLayout>, 
        children: [
            {
                path: 'addService', 
                element: <AddService></AddService>, 
            }
        ]
    }
])

export default router; 