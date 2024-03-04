import { useState } from "react";


const useWallet = () => {
    const [wallet , setWallet] = useState("Ethereum Rinkeby");
    return [wallet, setWallet];
};

export default useWallet;