import { FaDiscord, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-12 px-6 md:px-16 border-t border-gray-800 pl-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 rounded-full border-2 border-purple-500 flex items-center justify-center">
              <span className="text-purple-500 font-bold text-xl">◉</span>
            </div>
            <h2 className="text-white text-2xl font-bold">HalfArt</h2>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            The Leading NFT Marketplace On Ethereum Home
            <br />
            To The Next Generation Of Digital Creators.
          </p>
          <div className="flex space-x-5 text-xl">
            <a href="#" className="hover:text-purple-400">
              <FaDiscord />
            </a>
            <a href="#" className="hover:text-purple-400">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-purple-400">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-purple-400">
              <FaYoutube />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Marketplace</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-purple-400">Explore</a></li>
            <li><a href="#" className="hover:text-purple-400">Articles</a></li>
            <li><a href="#" className="hover:text-purple-400">How It Works</a></li>
            <li><a href="#" className="hover:text-purple-400">Help</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-purple-400">Tokens</a></li>
            <li><a href="#" className="hover:text-purple-400">API</a></li>
            <li><a href="#" className="hover:text-purple-400">Big Bounty</a></li>
            <li><a href="#" className="hover:text-purple-400">Become Partners</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-500">
        © 2022 HalfArt. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
