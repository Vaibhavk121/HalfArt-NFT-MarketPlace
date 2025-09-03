import Image1 from '../../public/NFTS/Image1.jpeg'
import Image2 from '../../public/NFTS/Image2.png'
import Image3 from '../../public/NFTS/Image5.jpeg'
const CTA = () => {
  return (
    <div className="bg-gradient-to-b from-[#0c0c0c] to-[#000000] py-10 px-6 flex justify-center">
      <div className="bg-[#0d0d0d] rounded-2xl shadow-lg w-full max-w-6xl flex flex-col md:flex-row items-center justify-between p-8">
        
        <div className="text-left max-w-md">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-4">
            Start selling now
          </h2>
          <p className="text-gray-300 mb-6 text-sm md:text-base">
            Once you’ve set up your wallet of choice, connect it to OpenSea by clicking 
            the wallet icon in the top right corner. Learn about the wallets we support.
          </p>
          <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full font-semibold transition-all">
            Enter Marketplace
          </button>
        </div>

        <div className="relative flex items-center mt-8 md:mt-0">
          <img
            src={Image1}
            alt="NFT 1"
            className="w-40 md:w-56 rounded-xl border border-gray-800 shadow-lg relative z-30"
          />
          <img
            src={Image2}
            alt="NFT 2"
            className="w-40 md:w-56 rounded-xl border border-gray-800 shadow-lg absolute left-8 top-4 z-20"
          />
          <img
            src={Image3}
            alt="NFT 3"
            className="w-40 md:w-56 rounded-xl border border-gray-800 shadow-lg absolute left-16 top-8 z-10"
          />
        </div>
      </div>
    </div>
  )
}

export default CTA
