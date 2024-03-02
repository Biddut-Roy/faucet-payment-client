

const Home = () => {
    return (
        <div className="min-vh-100 d-flex mt-1">
            <div className="container ">
                <h1 className="text-center bg-primary bg-gradient">Notice here</h1>
                <div className="mt-4 ">
                <h1 className="text-bold fs-2 ">Request testnet LINK</h1>
                <h1 className="text-sm fs-5">Get testnet LINK for an account on one of the supported blockchain testnets so you can create and test your own oracle and Chainlinked smart contract</h1>

                </div>
                <div className="row mt-5">
                    <div className="col-md-6 offset-md-3">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Wallet Address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Request Type</label>
                                <div className="row">
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="20 Test Link" aria-label="20 Test Link" />
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="0.5 ETH" aria-label="0.5 ETH" />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Send Request</button>
                        </form>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-md-8 offset-md-2">
                        <h3>Request History</h3>
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

                                <tr>
                                    <th scope="row">1</th>
                                    <td>2024-03-02 14:30:00</td>
                                    <td>0.1 LINK</td>
                                    <td>0x123456789abcdef</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;