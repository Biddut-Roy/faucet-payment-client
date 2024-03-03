import usePublicAxios from "../../Hooks/usePublicAxios";


const Faq = () => {
    const publicAxios = usePublicAxios();
    
    return (
        <div className="container min-vh-100">
            <h1 className="text-center m-4">Frequently Asked Questions</h1>
            <div className="row justify-content-center col-8 mx-auto my-auto">
                <div id="accordion">
                    <div className="card mb-2">
                        <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                                <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{ textDecoration: 'none' }}>
                                What is a blockchain oracle?
                                </button>
                            </h5>
                        </div>

                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                            <div className="card-body">
                            A blockchain oracle is any system that services a smart contract by providing it with data from an off-chain source or connecting it with an off-chain system. Oracles enable connectivity between blockchains and real-world data by interfacing with external APIs and data feeds, allowing them to pull data for or push data from a smart contract.
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingTwo">
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ textDecoration: 'none' }}>
                                Why do blockchains need oracles?
                                </button>
                            </h5>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                            <div className="card-body">
                            Oracles enable smart contracts to interact with off-chain resources. Without oracles, smart contracts can only access data within a blockchain, severely limiting their potential applications. The majority of industry-changing real-world use cases for smart contracts require off-chain data and computation for proper execution and often an integration with existing payment rails to settle a contract. For example, a smart contract may require high-quality weather data from a reputable source like AccuWeather to trigger a transaction. It may also require the ability to pay out escrowed fiat currency through existing financial infrastructure, such as a bank checking account.
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingThree">
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{ textDecoration: 'none' }}>
                                What is the Chainlink Network?
                                </button>
                            </h5>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                            <div className="card-body">
                            The Chainlink Network refers to all of the decentralized oracle networks actively operating using the Chainlink protocol, including individual oracles, data providers running their own node, and node operators. By enabling smart contracts to quickly and securely connect to off-chain data sources using decentralized oracle networks, the Chainlink Network helps developers build more robust and diverse blockchain applications using real-world inputs and outputs. Additionally, as middleware between low-level blockchain protocols and external, off-chain data sources, the Chainlink Network serves as an abstraction layer for data providers to easily sell their existing APIs to any blockchain network.
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingThree">
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{ textDecoration: 'none' }}>
                                Where can I explore the performance and reliability of the Chainlink Network?
                                </button>
                            </h5>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                            <div className="card-body">
                            The Chainlink Price Feeds page provides real-time visualizations of each decentralized price feed that provides on-chain exchange rates for cryptocurrencies, stablecoins, commodities, and indices. Users can explore each individual price feed, which offers transparency around which nodes power each feed, each node’s latest response, how often feed updates occur, the gas price paid by each node, the users sponsoring each feed, and hyperlinks to on-chain transactions.requests, average response times, and more.
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingThree">
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{ textDecoration: 'none' }}>
                                What is Chainlink Verifiable Random Function (VRF)?
                                </button>
                            </h5>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                            <div className="card-body">
                            Chainlink VRF brings secure random number generation to the blockchain. Chainlink VRF solves the difficult problem of providing an on-chain source of randomness that is publicly verifiable to be authentic and tamper-proof. Many smart contracts are augmenting the value they can create by utilizing Chainlink VRF, specifically applications such as gaming dApps that must prove to their users that their source of randomness is provably fair and resistant to manipulation from any external entity. Chainlink VRF enables and accelerates the development of smart contracts focused on blockchain gaming, security, layer-two protocols, and various other use cases.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;