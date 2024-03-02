

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Faucets</a>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#">Fantom Testnet</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Connect Wallet</a>
                </li>
            </ul>
        </div>
    </nav>
        </div>
    );
};

export default Navbar;