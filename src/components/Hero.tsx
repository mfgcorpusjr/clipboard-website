export default function Hero() {
  return (
    <div className="max-w-6xl mx-auto p-8 my-20 text-center">
      <img src="./images/logo.svg" className="mx-auto mb-12" />
      <h1 className="mb-8 text-5xl text-gray-700 font-bold">
        A history of everything you copy
      </h1>
      <h3 className="mb-8 max-w-3xl mx-auto text-2xl text-gray-500">
        Clipboard allows you to track and organize everything you copy.
        Instantly access your clipboard on all your devices.
      </h3>

      <div className="flex flex-col md:flex-row justify-center gap-8">
        <button className=" bg-teal-500 hover:bg-teal-600 px-12 py-4 rounded-full shadow-md text-white font-semibold cursor-pointer transition-colors duration-300">
          Download for iOS
        </button>
        <button className=" bg-indigo-500 hover:bg-indigo-600 px-12 py-4 rounded-full shadow-md text-white font-semibold cursor-pointer transition-colors duration-300">
          Download for Mac
        </button>
      </div>
    </div>
  );
}
