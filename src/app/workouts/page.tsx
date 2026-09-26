import React from "react";
import { getAllWorkouts } from "../lib/feching";
import { IWorkout } from "../type/type";
import WorkoutCard from "../components/WorkoutCard";

const WorkoutPage = async () => {
  const data = await getAllWorkouts();

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:ml-18 lg:mr-6" id="library">
      <h1 className="white font-bold text-2xl sm:text-3xl md:text-4xl">
        THE LIBRARY
      </h1>

      <p className="text-gray-500 text-sm sm:text-[15px] mt-2">
        Twelve lifts covering every major muscle group.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mt-6">
        {data.map((workout: IWorkout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </div>
  );
};

export default WorkoutPage;