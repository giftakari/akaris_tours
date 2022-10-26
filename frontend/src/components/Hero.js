import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div>
      <div className="container mx-auto">
        <Navbar />
        <h1 className="text-4xl font-semibold text-white max-w-md mt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, et.
        </h1>
        <div className="flex gap-2 items-center mt-5">
          <span className="bg-red-400 text-white rounded-full aspect-square w-8 grid place-content-center">
            ▶
          </span>
          <span>Play Video</span>
        </div>
        <div className="w-1/2 h-10 border border-black bg-[hsl(0%,0%,100%)]"></div>
      </div>
    </div>
  );
}
