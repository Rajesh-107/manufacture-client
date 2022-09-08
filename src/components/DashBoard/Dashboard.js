import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user);


    return (
        <div className="drawer drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content py-5 px-4">
            <h2>Welcome to the dashboard</h2>
          {/* <!-- Page content here --> */}
          <Outlet/>
          
        
        </div> 
        <div className="drawer-side ">
          <label for="dashboard-sidebar" className="drawer-overlay"></label> 
          <ul className="menu p-4 overflow-y-auto w-56 bg-base-200 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li><Link  to='/dashboard'> My Profile</Link></li>
            <li><Link to='/dashboard/myorder'>My Order</Link></li>
            <li><Link to='/dashboard/review'>My Review</Link></li>
            {admin && <li><Link to='/dashboard/users'>All Users</Link></li>}
            {admin && <li><Link to='/dashboard/addproduct'>Add Products</Link></li>}
            {admin && <li><Link to='/dashboard/manageorder'>Manage Order</Link></li>}
            {admin && <li><Link to='/dashboard/manageproduct'>Manage Product</Link></li>}
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;