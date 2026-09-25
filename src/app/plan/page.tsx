/* eslint-disable react/no-unescaped-entities */

"use client";

import { useContext, useState } from "react";
import SavedCard from "../components/SavedCard";
import TodaysPlanCard from "../components/TodaysPlanCard";
import { IWorkout } from "../type/type";
import { WorkoutContext } from "../context/Context";

const Plan = () => {
  const { myPlan, saved } = useContext(WorkoutContext);

  const [sortBy, setSortBy] = useState<
    "duration" | "calories" | "rating"
  >("duration");

  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

  const sortWorkout = (workout: IWorkout[]) => {
    const sortedWorkout = [...workout];

    if (sortBy === "duration") {
      sortedWorkout.sort((a, b) => b.duration - a.duration);
    } else if (sortBy === "calories") {
      sortedWorkout.sort(
        (a, b) => b.caloriesBurned - a.caloriesBurned
      );
    } else {
      sortedWorkout.sort((a, b) => b.rating - a.rating);
    }

    return sortedWorkout;
  };

  const sortedMyPlan = sortWorkout(myPlan);
  const sortedSaved = sortWorkout(saved);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">

      <div>
        <h1 className="text-3xl sm:text-4xl font-bold white">
          MY PLAN
        </h1>

        <p className="text-gray-500 text-sm sm:text-base mt-2">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>


      {/*SUMMARY */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4 text-white bg-[#15181f] border border-gray-800 rounded-xl p-4 sm:p-5 mt-6 sm:mt-8">

        {/* Exercise */}
        <div className="text-center sm:text-left">
          <span className="text-gray-500 text-xs sm:text-sm">
            Exercise
          </span>

          <br />

          <span className="font-bold text-lg sm:text-xl">
            {activeTab === "today"
              ? myPlan.length
              : saved.length}
          </span>
        </div>


        {/* Minute */}
        <div className="text-center sm:text-left">
          <span className="text-gray-500 text-xs sm:text-sm">
            Minute
          </span>

          <br />

          <span className="font-bold text-lg sm:text-xl">
            {activeTab === "today"
              ? myPlan.reduce(
                  (total, workout) =>
                    total + workout.duration,
                  0
                )
              : saved.reduce(
                  (total, workout) =>
                    total + workout.duration,
                  0
                )}
          </span>
        </div>


        {/* Calories */}
        <div className="text-center sm:text-left">
          <span className="text-gray-500 text-xs sm:text-sm">
            Calories
          </span>

          <br />

          <span className="font-bold text-lg sm:text-xl">
            {activeTab === "today"
              ? myPlan.reduce(
                  (total, workout) =>
                    total + workout.caloriesBurned,
                  0
                )
              : saved.reduce(
                  (total, workout) =>
                    total + workout.caloriesBurned,
                  0
                )}
          </span>
        </div>

      </div>


      {/* sort */}
      <div className="w-full flex justify-end mt-6 sm:mt-8">

        <div className="flex items-center gap-2">

          <span className="text-xs text-gray-500">
            Sort By
          </span>

          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(
                e.target.value as
                  | "duration"
                  | "calories"
                  | "rating"
              )
            }
            className="select select-sm h-9 min-h-0 w-28 sm:w-32 rounded-lg border border-gray-800 bg-[#15171d] px-2 sm:px-3 text-xs text-gray-300 outline-none"
          >
            <option value="duration">
              Duration
            </option>

            <option value="calories">
              Calories
            </option>

            <option value="rating">
              Rating
            </option>
          </select>

        </div>

      </div>


      {/* tabs */}
      <div className="flex mt-5 sm:mt-6 mb-6 sm:mb-10">

        {/* Today's Plan */}
        <button
          onClick={() => setActiveTab("today")}
          className={`w-1/2 sm:w-32 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold rounded-l-2xl ${
            activeTab === "today"
              ? "bg-[#c2f800] text-black"
              : "bg-gray-900 text-gray-400"
          }`}
        >
          Today's Plan
        </button>


        {/* Saved */}
        <button
          onClick={() => setActiveTab("saved")}
          className={`w-1/2 sm:w-32 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold rounded-r-2xl ${
            activeTab === "saved"
              ? "bg-[#c2f800] text-black"
              : "bg-gray-900 text-gray-400"
          }`}
        >
          Saved
        </button>

      </div>


      {/* content */}

      <div className="w-full overflow-x-auto">

        {activeTab === "today" ? (
          <TodaysPlanCard
            sortedMyPlan={sortedMyPlan}
          />
        ) : (
          <SavedCard
            sortedSaved={sortedSaved}
          />
        )}

      </div>

    </div>
  );
};

export default Plan;

