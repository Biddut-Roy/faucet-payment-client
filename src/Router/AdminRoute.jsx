import { Navigate, useLocation } from "react-router-dom"
import PropTypes from 'prop-types';
import useAdmin from "../Hooks/useAdmin";
import { useAuth0 } from "@auth0/auth0-react";



const AdminRoute = ({children}) => {
    const location = useLocation();
    const { user, isLoading } = useAuth0();
    const [isAdmin , isPending] = useAdmin();


    if (isPending || isLoading) {
        
       return <p>Loading...........</p>
    }

    if (user && isAdmin) {
        return children
    }

    return <Navigate to="/" state={{ from: location }} replace />;
};
AdminRoute.propTypes = {
    children: PropTypes.node.isRequired,
  };


export default AdminRoute;