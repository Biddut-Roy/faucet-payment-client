import { createContext,useState } from "react";
import PropTypes from 'prop-types'; 




export const AuthContext = createContext()

const GlobalAuth =({children})=> {
    const [wallet , setWallet] = useState("Ethereum Rinkeby");
    
    const info = {wallet , setWallet }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

GlobalAuth.propTypes ={
    children: PropTypes.node,
}

export default GlobalAuth;