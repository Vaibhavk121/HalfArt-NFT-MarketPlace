import Logo from '../../public/logo.png'

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-6 py-4 flex items-center justify-between  shadow-lg">

      <div className="flex flex-row justify-center items-center gap-4 font-bold tracking-wide">
        <img src={Logo} className='w-15' />
        <h1 className='text-3xl font-bold'>HalfArt</h1>
      </div>

      <ul className="hidden md:flex gap-8 text-sm font-medium">
        <li className="hover:text-purple-400 text-xl cursor-pointer">Marketplace</li>
        <li className="hover:text-purple-400 text-xl cursor-pointer">Collection</li>
        <li className="hover:text-purple-400 text-xl cursor-pointer">Community</li>
        <li className="hover:text-purple-400 text-xl cursor-pointer">Create</li>
      </ul>

      <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition">
        Connect Wallet
      </button>
    </nav>

  )
}

export default Navbar
