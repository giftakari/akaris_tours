export default function Navbar() {
  return (
    <header className="flex py-2 gap-5 items-center">
      <div className="font-semibold">
        <span className="bg-red-400 p-2 rounded-full text-white mr-1">✈️</span>
        <span className="text-lg">Travel</span>
      </div>
      <nav className="font-semibold">
        <ul className="flex gap-4 opacity-70 text-white">
          <li>Home</li>
          <li>About</li>
          <li>Adventures</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div className="ml-auto flex gap-3">
        <button className="bg-transparent border-2 border-red-400 text-red-400 py-1 px-6 rounded-md">
          Login
        </button>
        <button className="bg-red-400 border-2 border-red-400 text-white py-1 px-6 rounded-md">
          Register
        </button>
      </div>
    </header>
  );
}
