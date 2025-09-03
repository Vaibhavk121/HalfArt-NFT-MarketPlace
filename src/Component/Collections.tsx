import {useState} from 'react'
import Image1 from '../../public/NFTS/Image1.jpeg'
import Image2 from '../../public/NFTS/Image2.png'
import Image3 from '../../public/NFTS/Image3.jpeg'
import Image4 from '../../public/NFTS/Image4.jpeg'
import Image5 from '../../public/NFTS/Image5.jpeg'
import Image6 from '../../public/NFTS/Image6.jpeg'
import Image7 from '../../public/NFTS/Image7.jpeg'
import Image8 from '../../public/NFTS/Image8.jpg'
const categories = [
  "Art",
  "Collectibles",
  "Metaverse",
  "Virtual Worlds",
  "Sports",
  "Music",
];

const collections = [
  {
    name: "COOLGUYZZ",
    author: "Coolguyzz.io",
    eth: "1.5 ETH",
    price: "$2045.12",
    change: "-12.45%",
    img: Image1,
    positive: false,
  },
  {
    name: "gangstaboi v.1",
    author: "QB_Gang",
    eth: "2.53 ETH",
    price: "$4487",
    change: "+34.5%",
    img: Image2,
    positive: true,
  },
  {
    name: "HyperApe",
    author: "Hyperape.co",
    eth: "1.31 ETH",
    price: "$1743.4",
    change: "-6.8%",
    img: Image3,
    positive: false,
  },
  {
    name: "LyoddS1",
    author: "Naomi Tn",
    eth: "1.156 ETH",
    price: "$1670",
    change: "+12.45%",
    img: Image4,
    positive: true,
  },
  {
    name: "Azuki 3D",
    author: "AZUKIJP",
    eth: "1.5 ETH",
    price: "$1907",
    change: "+16%",
    img: Image5,
    positive: true,
  },
  {
    name: "CuteApe White",
    author: "CuteApe_19",
    eth: "0.045 ETH",
    price: "$245.6",
    change: "-14.5%",
    img: Image6,
    positive: false,
  },
  {
    name: "SneakerHead Vol.1",
    author: "SneakerHeadCorp",
    eth: "1.4 ETH",
    price: "$1790",
    change: "+17.9%",
    img: Image7,
    positive: true,
  },
  {
    name: "cvltB3AR",
    author: "CVLTBEAR",
    eth: "0.88 ETH",
    price: "$545",
    change: "+12.45%",
    img: Image8,
    positive: true,
  },
];


const Collections = () => {
    const [active, setActive] = useState("Art");

  return (
    <section className="bg-black text-white py-16 px-6 lg:px-12 relative">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Top Collections
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setActive(cat)}
            className={`px-6 py-2 rounded-full text-sm font-medium border transition ${
              active === cat
                ? "bg-purple-600 border-purple-600"
                : "border-gray-700 hover:border-purple-500"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {collections.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-lg hover:scale-105 transition"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-gray-400 text-sm">{item.author}</p>

              <div className="flex justify-between items-center mt-3">
                <span className="text-sm font-medium">{item.eth}</span>
                <span className="text-sm font-semibold">{item.price}</span>
              </div>

              <div className="flex justify-between items-center mt-1">
                <p className="text-xs text-gray-400">Floor Price</p>
                <p
                  className={`text-sm ${
                    item.positive ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {item.change}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button className="px-8 py-3 rounded-full border border-gray-700 hover:border-white transition">
          See more
        </button>
      </div>
    </section>
  )
}

export default Collections
