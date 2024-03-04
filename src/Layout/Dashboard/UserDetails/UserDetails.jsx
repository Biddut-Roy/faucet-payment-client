import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "../../../Hooks/usePublicAxios";


const UserDetails = () => {
    const publicAxios = usePublicAxios();

    const { isPending, error, refetch, data } = useQuery({
        queryKey: ['userData'],
        queryFn: async () => {
            const res = await publicAxios.get('api/v1/user')
            return res.data
        }
    })
    if (isPending) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message
    refetch()

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((user, idx) => (<tr key={user._id}>
                            <th scope="row">{idx + 1}</th>
                            <td>{user?.name}</td>
                            <td>{user?.email}</td>
                        </tr>))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default UserDetails;