import 
 {BsPersonCircle,  BsJustify}
 from 'react-icons/bs'
 import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = ({OpenSidebar}) => {
    return (
        <div>
              <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
           <Link to={'/'} style={{textDecoration:'none'}}> Fuacet </Link>
        </div>
        <div className='header-right'>
            <BsPersonCircle className='icon'/>
        </div>
    </header>
        </div>
    );
};

Header.propTypes = {
    OpenSidebar: PropTypes.func.isRequired,
  };

export default Header;