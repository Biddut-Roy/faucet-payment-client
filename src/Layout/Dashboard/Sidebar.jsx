import 
{BsGrid1X2Fill,  BsFillGrid3X3GapFill, BsPeopleFill, 
   BsFillGearFill}
 from 'react-icons/bs'
 import PropTypes from 'prop-types';

const Sidebar = ({openSidebarToggle, OpenSidebar}) => {
    return (
        <div>
             <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
            <BsGrid1X2Fill className='icon'/> Dashboard
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGrid3X3GapFill className='icon'/> Total User
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPeopleFill className='icon'/>User Details
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> LogOut
                </a>
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