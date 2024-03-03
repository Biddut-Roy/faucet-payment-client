import { useState } from "react";
import "./dash.css"
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";



const Dashboard = () => {

    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }
    return (
        <div className=''>
            <Header OpenSidebar={OpenSidebar} />
            <div className="row">
                <div className="col-3">
                    <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
                </div>
                <div className="col-8">
                    <Outlet />
                </div>
            </div>

        </div>
    );
};

export default Dashboard;