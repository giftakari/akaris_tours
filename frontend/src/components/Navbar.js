export default function Navbar() {
  return (
    <header className="flex py-10 gap-5 items-center">
      <div className="logo">
        <span className="bg-red-400 p-1 rounded-full text-white">✈️</span>
        <span className="text-lg">Travel</span>
      </div>
      <nav>
        <ul className="flex gap-4 opacity-70">
          <li>Home</li>
          <li>About</li>
          <li>Adventures</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div className="ml-auto">
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
