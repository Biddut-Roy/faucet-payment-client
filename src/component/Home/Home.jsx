import ReCAPTCHA from "react-google-recaptcha";
import { NavLink, Outlet } from "react-router-dom";
import "./home.css"


const Home = () => {
    function onChange(value) {
        console.log("Captcha value:", value);
    }

    return (
        <div className="min-vh-100 d-flex mt-1 " style={{ backgroundColor: '#EEF2FE' }}>
            <div className="container ">
                <h1 className="text-center fs-3 py-3" style={{ backgroundColor: '#9B1FE9' }}>Notice here</h1>
                <div className="mt-4 ">
                    <h1 className="text-bold fs-2 ">Request testnet LINK</h1>
                    <h1 className="text-sm fs-5 w-60">Get testnet LINK for an account on one of the supported blockchain testnets so you can create and test your own oracle and Chainlinked smart contract</h1>
                </div>
                <div className="row mt-5">
                    <div className="col-md-6 offset-md-0">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label" style={{ color: '#9B1FE9' }}>Wallet Address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label" style={{ color: '#9B1FE9' }}>Request Type</label>
                                <div className="row">
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="20 Test Link" aria-label="20 Test Link" />
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="0.5 ETH" aria-label="0.5 ETH" />
                                    </div>
                                </div>
                            </div>
                            <ReCAPTCHA
                                sitekey="6LeB-4cpAAAAAAdechqyonlgBavNWwQMnIb0XsB4"
                                onChange={onChange}
                            />
                            <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#9B1FE9' }}>Send Request</button>
                        </form>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-md-8 offset-md-0">
                        <h3>Request History</h3>
                        <div className="d.flex m-4" >
                            <NavLink  to={"/ETH"} className="fs-6 mx-5 p-2 rounded" style={{ textDecoration: 'none' }}>ETH Transaction History</NavLink >
                            <NavLink to={"/TestH"} className="fs-6 p-2 rounded" style={{ textDecoration: 'none' }}>TestLink Transaction History</NavLink>
                        </div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;