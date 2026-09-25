/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

const NotFound = () => {
  return (
    <main className="min-h-screen bg-black flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-[#c2f800] text-7xl font-bold">
        404
      </h1>

      <h2 className="text-white text-3xl font-bold mt-4">
        PAGE NOT FOUND
      </h2>

      <p className="text-gray-500 mt-3">
        The page you're looking for doesn't exist.
      </p>

      <Link
        href="/"
        className="bg-[#c2f800] text-black font-bold text-sm px-6 py-3 rounded-full mt-6"
      >
        Go Home
      </Link>
    </main>
  );
};

export default NotFound;