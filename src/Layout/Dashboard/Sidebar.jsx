import {
    BsGrid1X2Fill, BsPeopleFill,
}
    from 'react-icons/bs'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Sidebar = ({ openSidebarToggle, OpenSidebar }) => {
    const { logout } = useAuth0();

    return (
        <div>
            <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
                <div className='sidebar-title'>
                    <div className='sidebar-brand'>
                        <BsGrid1X2Fill className='icon' /> Dashboard
                    </div>
                    <span className='icon close_icon' onClick={OpenSidebar}>X</span>
                </div>

                <ul className='sidebar-list'>
                    <li className='sidebar-list-item'>
                        <Link to={'/Dashboard'}>
                            <BsPeopleFill className='icon' />User Details
                        </Link>
                    </li>
                    <li className='sidebar-list-item'>
                        <Link to={'/Dashboard'}>
                            <BsPeopleFill className='icon' />User Details
                        </Link>
                    </li>
                    <li className='sidebar-list-item'>
                        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className="dropdown-item bg-danger text-center rounded">
                            LogOut</button>
                    </li>
                </ul>
            </aside>
        </div>
    );
};

Sidebar.propTypes = {
    openSidebarToggle: PropTypes.func.isRequired,
    OpenSidebar: PropTypes.func.isRequired,
};

export default Sidebar;