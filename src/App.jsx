import './App.css'


function App() {

  return (
    <>

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

    <div className="container mt-4">
        <h1 className="text-center">Notice here</h1>
        <div className="row mt-4">
            <div className="col-md-6 offset-md-3">
                <htmlForm>
                    <div className="htmlForm-group">
                        <label htmlFor="walletAddress">Wallet Address</label>
                        <input type="text" className="htmlForm-control" id="walletAddress" placeholder="Enter wallet address" />
                    </div>
                    <div className="htmlForm-group">
                        <label htmlFor="requestType">Request Type</label>
                        <select className="htmlForm-control" id="requestType">
                            <option>Test LINK</option>
                            <option>Test ETH</option>
                        </select>
                    </div>
                    <div className="htmlForm-group">
                        <label htmlFor="amount">Amount</label>
                        <input type="number" className="htmlForm-control" id="amount" placeholder="Enter amount" />
                    </div>

                    <div className="htmlForm-group">
                        <label htmlFor="captcha">CAPTCHA</label>
                        <input type="text" className="htmlForm-control" id="captcha" placeholder="Enter CAPTCHA" />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Send Request</button>
                </htmlForm>
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
    </>
  )
}

export default App
