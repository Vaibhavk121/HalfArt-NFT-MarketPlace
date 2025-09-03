import Skull from "../assets/Hero.jpeg" 

const Hero = () => {
  return (
    <div>
      <section className="relative bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">

        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Discover <br />
            Collect, & Sell <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
              Extraordinary
            </span>{" "}
            NFTs
          </h1>

          <p className="text-gray-300 max-w-md">
            The Leading NFT Marketplace On Ethereum <br />
            Home To The Next Generation Of Digital Creators. <br />
            Discover The Best NFT Collections.
          </p>

          <div className="flex space-x-4">
            <button className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition font-medium">
              Explore
            </button>
            <button className="px-6 py-3 rounded-full border border-gray-500 hover:border-white transition font-medium">
              Create
            </button>
          </div>
          
        </div>

      
        <div className="relative flex justify-center">
          <div className="relative w-120 h-150 bg-gray-900 rounded-2xl shadow-2xl p-4">
            <img src={Skull} />
            <div className="flex space-x-10 pt-8 text-center">
            
          </div>
          

           
            <div className="flex flex-row">
            <div>
              <p className="text-2xl font-bold">432K+</p>
              <p className="text-gray-400 text-sm">Collections</p>
            </div>
            <div>
              <p className="text-2xl font-bold">200K+</p>
              <p className="text-gray-400 text-sm">Artists</p>
            </div>
            <div>
              <p className="text-2xl font-bold">10K+</p>
              <p className="text-gray-400 text-sm">Community</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Hero
