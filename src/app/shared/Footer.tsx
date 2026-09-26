import Image from "next/image";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <div className="border-t-2 border-t-gray-800 mt-20">
      <footer className="lg:w-7xl w-full mx-auto bg-neutral text-neutral-content p-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src={logo}
              height={24}
              width={24}
              alt="FitLog logo"
            />

            <h2 className="white text-xl font-semibold">
              FITLOG
            </h2>
          </div>

          {/* Copyright */}
          <p className="text-center text-sm text-gray-400">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>

        </div>

      </footer>
    </div>
  );
};

export default Footer;

