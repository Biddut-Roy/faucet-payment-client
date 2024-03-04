import { useContext } from "react";
import { AuthContext } from "../AuthProvider/GlobalAuth";


const useWallet = () => {
   const Wallat = useContext(AuthContext)
   return Wallat;
};

export default useWallet;