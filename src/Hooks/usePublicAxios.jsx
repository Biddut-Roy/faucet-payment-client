import axios from "axios";

const publicAxios = axios.create({
    baseURL: 'https://fuacet-biddut-roys-projects.vercel.app/',
     withCredentials: true, 
})

const usePublicAxios= () => {
    return publicAxios;
}

export default usePublicAxios;