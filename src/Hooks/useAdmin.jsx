import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "./usePublicAxios";
import { useAuth0 } from "@auth0/auth0-react";


const useAdmin = () => {
    const publicAxios = usePublicAxios();
    const { user, isLoading } = useAuth0();

    const { data: isAdmin , isPending } = useQuery({
        queryKey : [ user?.email , "isAdmin"],
        enabled: !isLoading,
        queryFn: async() =>{
            const res = await publicAxios.get(`api/v1/admin/${user?.email}`)
            return res.data;
        }
    })
 return [isAdmin , isPending]
};

export default useAdmin;