import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
    const { loginWithRedirect, user } = useAuth0();
    return (
        <div className="border w-90 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container d-flex justify-content-batwing">
                    <div>
                        <a className="navbar-brand border" href="#">Faucets</a>
                    </div>
                    <div className="mt-3">
                        <ul className="d-flex list-unstyled align-items-center justify-content-center">
                            <li className="nav-item dropdown m-2">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Fantom Testnet
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><h1 className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <button type="button" className="btn btn-primary" style={{ backgroundColor: '#9B1FE9' }} data-toggle="modal" data-target="#exampleModalCenter">
                                    Connect Wallet
                                </button>
                            </li>
                            <li className="nav-item dropdown m-2">
                                <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                                    </svg>
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
                                    <li>
                                        <button onClick={() => loginWithRedirect()} className="dropdown-item">Sign in</button>
                                    </li>
                                    <li><button className="dropdown-item">Sign up</button></li>
                                    <li><h1 className="dropdown-divider" /></li>
                                    <li>
                                        <Link to={"FAQ"} className="dropdown-item">FAQ</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Modal */}
                <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Fantom Testnet</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {/* Modal body content */}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Connect </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;