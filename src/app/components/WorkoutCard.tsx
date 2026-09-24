import React from "react";
import { IWorkout } from "../type/type";
import Image from "next/image";
import { MdAccessTime } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

const WorkoutCard = ({ workout }: { workout: IWorkout }) => {

  


  return (
   <Link href={`./workouts/${workout.id}`}>
         <div  className="card bg-[#222630] mt-10 w-100 h-100 shadow-sm">
      <figure>
        <Image src={workout.image} alt="image" width={400} height={100} />
      </figure>
      <div className="card-body p-4">
    {/* Muscle groups */}
    <div className="flex items-center gap-2">
      {workout.muscleGroups.map((muscle: string) => (
        <span
          key={muscle}
          className="rounded-full bg px-3 py-1 text-[10px] font-bold text-black"
        >
          {muscle}
        </span>
      ))}
    </div>
        <h2 className="card-title">{workout.name}</h2>
        <p className="text-gray-500">{workout.equipment}</p>
        {/*  */}
        <hr className="border-gray-700" />
        <div className="flex justify-start gap-3 mr-40 text-gray-500">
            <p className="flex gap-2 items-center"><MdAccessTime/>{workout.duration} min</p>
            <p className="flex gap-1 items-center"><AiFillLike />{workout.caloriesBurned} kcal</p>
            <p className="flex gap-1 items-center"><FaStar />{workout.rating}</p>
        </div>
      
      </div>
    </div>
   </Link>
  );
};

export default WorkoutCard;
