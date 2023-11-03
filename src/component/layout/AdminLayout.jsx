
import { Outlet } from 'react-router-dom';
import AddService from '../../page/AddService';

const AdminLayout = () => {
    return (
        <div>
            <Outlet></Outlet>
            <AddService></AddService>
        </div>
    );
};

export default AdminLayout;