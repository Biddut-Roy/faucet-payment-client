import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "../../../Hooks/usePublicAxios";
import { useAuth0 } from "@auth0/auth0-react";


const TestHistory = () => {
    const { user, isAuthenticated } = useAuth0();
    const publicAxios = usePublicAxios();


    const { isPending, error, refetch, data } = useQuery({
        queryKey: ['TsHistory'],
        queryFn: async () => {
            const res = await publicAxios.get(`api/v1/Transactions/${user.email}`)
            return res.data
        }
    })
    if (isPending) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message
    refetch()
    const testData = data.filter((item) => item.type === "test");

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Time</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Transaction Hash</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        isAuthenticated ?
                        testData.map((item, idx) => <tr key={item._id}>
                            <th scope="row">{idx + 1}</th>
                            <td>{item.date_time}</td>
                            <td>{item.amount} LINK</td>
                            <td>{item.hash}</td>
                        </tr>)
                        :
                        <tr>
                            <th scope="row">1</th>
                            <td></td>
                            <td>0. LINK</td>
                            <td></td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    );
};

export default TestHistory;