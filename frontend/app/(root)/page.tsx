import { Facebook, Instagram, Twitter } from "lucide-react";

export default async function Home() {
  return (
    <div className="w-full min-h-screen">
      <div
        className="w-full min-h-screen"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/18638222/pexels-photo-18638222/free-photo-of-swans-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col items-center justify-around w-full min-h-screen bg-black bg-opacity-50">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl text-pretty uppercase font-bold text-white">
              Our New homepage is
            </h1>
            <p className="text-7xl mt-3 font-semibold text-white">
              Launching soon!
            </p>
          </div>

          <span className="text-4xl text-white font-semibold">
            TheLegalINK.
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-tr from-zinc-900 to-black text-zinc-400">
        <h3 className="text-2xl font-semibold">About</h3>
        <p className="text-lg">
          LegalInk is a platform for lawyers to manage their clients and cases.
        </p>
      </div>

      <div className="flex items-center justify-evenly w-full min-h-[100px] p-5 bg-gray-300">
        <div className="flex flex-col items-start">
          <span className="text-3xl text-black font-bold">Contact Us</span>
          <span className="text-lg text-zinc-800 font-semibold">
            thelegalink@gmail.com
          </span>
        </div>
        <div className="flex flex-col items-start">
          <span className="text-3xl text-black font-bold">Follow us:</span>
          <div className="flex items-center justify-between w-full">
            <Facebook className="w-5 h-5 cursor-pointer" />
            <Instagram className="w-5 h-5 cursor-pointer" />
            <Twitter className="w-5 h-5 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
