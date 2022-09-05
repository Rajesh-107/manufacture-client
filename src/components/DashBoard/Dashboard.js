import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content py-5 px-4">
            <h2>Welcome to the dashboard</h2>
          {/* <!-- Page content here --> */}
          <Outlet/>
          
        
        </div> 
        <div class="drawer-side ">
          <label for="dashboard-sidebar" class="drawer-overlay"></label> 
          <ul class="menu p-4 overflow-y-auto w-56 bg-base-200 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li><Link  to='/dashboard'> My Profile</Link></li>
            <li><Link to='/dashboard/myorder'>My Order</Link></li>
            <li><Link to='/dashboard/review'>My Review</Link></li>
            <li><Link to='/dashboard/users'>All Users</Link></li>
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;