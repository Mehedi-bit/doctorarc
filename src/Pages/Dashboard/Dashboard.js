import React from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className="text-2xl font-bold text-purple-500">Welcome to your Dashboard</h2>
                 <Outlet></Outlet>
            </div> 
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label> 
                <ul className="menu p-4 w-48 bg-base-100 text-base-content">
                {/* <!-- Sidebar content --> */}
                <li><Link to="/dashboard">My Dashboard</Link></li>
                <li><Link to="/dashboard/review">My Reviews</Link></li>
                <li><Link to="/dashboard/history">My History</Link></li>
                </ul>
            
            </div>
        </div>
    );
};

export default Dashboard;