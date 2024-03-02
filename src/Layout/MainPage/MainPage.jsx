import { Outlet } from "react-router-dom";
import Navbar from "../../component/Navbar & Footer/Navbar";


const MainPage = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default MainPage;