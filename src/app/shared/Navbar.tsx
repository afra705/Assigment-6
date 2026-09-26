"use client";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { WorkoutContext } from "../context/Context";
import { useContext } from "react";

const Navbar = () => {
  const { myPlan, saved } = useContext(WorkoutContext);

  return (
    <div className="border-b-2 sticky top-0 z-50 bg-black">
      <nav className="mx-4 sm:mx-6 md:mx-8 py-4 flex items-center justify-between text-white">

        {/* Logo */}
        <div className="flex gap-2 items-center">
          <Image src={logo} height={30} width={30} alt="logo" />

          <h2 className="font-bold text-base sm:text-lg">
            <Link href="/">FITLOG</Link>
          </h2>
        </div>

        {/* Navigation */}
        <div className="flex gap-2 sm:gap-4 md:gap-6">
          <Link
            className="text-[#C2F800] bg-[#393f26] px-2 py-2 rounded-full text-[10px] sm:text-[11px]"
            href="/workouts"
          >
            Workouts
          </Link>

          <Link
            className="text-[10px] sm:text-[11px] text-gray-500 px-2 py-2"
            href="/plan"
          >
            My Plan
          </Link>
        </div>

        {/* Plan & Saved */}
        <div className="flex gap-2 sm:gap-4 text-[10px] sm:text-[11px]">
          <Link href="/plan">
            Plan{" "}
            <span className="bg-[#C2F800] px-1.5 py-0.5 rounded-full text-black">
              {myPlan.length}
            </span>
          </Link>

          <Link href="/plan">
            Saved{" "}
            <span className="text-[#C2F800]">
              {saved.length}
            </span>
          </Link>
        </div>

      </nav>
    </div>
  );
};

export default Navbar;