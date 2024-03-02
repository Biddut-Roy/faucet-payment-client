import { Outlet } from "react-router-dom";
import Navbar from "../../component/Navbar & Footer/Navbar";
import Footer from "../../component/Navbar & Footer/Footer";


const MainPage = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainPage;