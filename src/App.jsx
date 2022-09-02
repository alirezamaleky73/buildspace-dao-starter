import { useAddress, useMetamask } from '@thirdweb-dev/react';

const App = () => {
  // Use the hooks thirdweb give us.
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  console.log("👋 Address:", address);

  // This is the case where the user hasn't connected their wallet
  // to your web app. Let them call connectWallet.
  if (!address) {
    return (
      <div className="landing">
        <h1>Let Bet on Someone's Creditworthiness</h1>
        <button oneclick={connectWithMetamask} className="btn-hero">
          Plug your wallet
        </button>
      </div>
    );
  }

  // This is the case where we have the user's address
  // which means they've connected their wallet to our site!
  return (
    <div className="landing">
      <h1>👀 wallet connected, Lets Bet!</h1>
    </div>);
}

export default App;
