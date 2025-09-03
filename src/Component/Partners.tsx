import metamask from "../../public/Partners/metamask.svg";
import trustwallet from "../../public/Partners/trust-wallet.jpg";
import walletconnect from "../../public/Partners/wallet-connect.png";
import exodus from "../../public/Partners/exodus.svg";
import safepal from "../../public/Partners/safepal-logo.svg";

const Partners = () => {
  return (
    <section className="bg-black py-16">
      <div className="max-w-5xl mx-auto flex flex-col items-center space-y-12">
        
        <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-12 gap-8 items-center">
          <div className="flex items-center space-x-3">
            <img src={metamask} alt="Metamask" className="h-14 sm:h-20" />
            <span className="text-white text-xl sm:text-3xl font-semibold tracking-wide">METAMASK</span>
          </div>
          <div className="flex items-center space-x-3">
            <img src={trustwallet} alt="Trust Wallet" className="h-14 sm:h-20 rounded-2xl" />
            <span className="text-white text-xl sm:text-3xl font-semibold tracking-wide">Trust Wallet</span>
          </div>
          <div className="flex items-center space-x-3">
            <img src={walletconnect} alt="WalletConnect" className="h-14 sm:h-20" />
            <span className="text-white text-xl sm:text-3xl font-semibold tracking-wide">WalletConnect</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-center sm:gap-20 gap-8 items-center">
          <div className="flex items-center space-x-3">
            <img src={exodus} alt="Exodus" className="h-14 sm:h-20" />
            <span className="text-white text-xl sm:text-3xl font-semibold tracking-wide">EXODUS</span>
          </div>
          <div className="flex items-center space-x-3">
            <img src={safepal} alt="SafePal" className="h-14 sm:h-20" />
            <span className="text-white text-xl sm:text-3xl font-semibold tracking-wide">SafePal</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Partners;
