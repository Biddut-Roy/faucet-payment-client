import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "../../Hooks/usePublicAxios";



const Faq = () => {
    const publicAxios = usePublicAxios();

    const {isPending, error , refetch, data} = useQuery({
        queryKey: ['shop-products'],
        queryFn: async () => {
            const res = await publicAxios.get('api/v1/fqa')
            return res.data
        }
    })
    if (isPending) return 'Loading...'
      if (error) return 'An error has occurred: ' + error.message  
    refetch()

    return (
        <div className="container min-vh-100">
            <h1 className="text-center m-4">Frequently Asked Questions</h1>
            <div className="row justify-content-center col-8 mx-auto my-auto">
                <div id="accordion">
                 {
                    data.map(datas =>(  <div key={datas._id} className="card mb-2">
                    <div className="card-header" id="headingOne">
                        <h5 className="mb-0">
                            <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{ textDecoration: 'none' }}>
                              {datas.Question}
                            </button>
                        </h5>
                    </div>

                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div className="card-body">
                            {datas.Ans}
                        </div>
                    </div>
                </div>))
                 }
                 
                </div>
            </div>
        </div>
    );
};

export default Faq;