"use client";
import { useContext } from "react";
import { WorkoutContext } from "../context/Context";
import Image from "next/image";
import Link from "next/link";
import { MdAccessTime } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { toast } from "react-toastify";
import { IWorkout } from "../type/type";


const SavedCard = ({sortedSaved}:{sortedSaved:IWorkout[]}) => {
  const { saved,setSaved } = useContext(WorkoutContext);
  

const handleDelete = (id: number) => {
  const deletedWorkout = saved.find((item) => item.id === id);

  toast.warning(`${deletedWorkout?.name} is deleted.`);

  setSaved((prev) => prev.filter((item) => item.id !== id));
};

  return (
    <div className="grid grid-cols-1">
      {sortedSaved.length > 0 ? (
         sortedSaved.map((item)=>{
            return   <div key={item.id} className="bg-[#15181f] border border-gray-800 rounded-xl p-3 mt-4 w-300">
      <div className="flex items-center gap-4">

        {/* Image */}
        <div className="shrink-0">
          <Image
            src={item.image}
            width={120}
            height={70}
            alt={item.name}
            className="w-30 h-20 object-cover rounded-lg"
          />
        </div>

        {/* Workout Information */}
        <div className="flex-1 min-w-0">

          <h2 className="text-white font-bold text-sm uppercase">
            {item.name}
          </h2>

          <p className="text-gray-500 text-xs mt-1">
            {item.equipment}
          </p>
          <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">

            <p className="flex items-center gap-1">
              <MdAccessTime className="text-[#c2f800]" />
              {item.duration} min
            </p>

            <p className="flex items-center gap-1">
              <AiFillLike className="text-[#c2f800]" />
              {item.caloriesBurned} kcal
            </p>

            <p className="flex items-center gap-1">
              <FaStar className="text-[#c2f800]" />
              {item.rating}
            </p>

          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2 shrink-0">

          <Link href={`/workouts/${item.id}`}>
            <button className="border border-gray-700 text-gray-300 rounded-full px-4 py-2 text-xs hover:bg-gray-800">
              View Details
            </button>
          </Link>

          <button onClick={()=>handleDelete(item.id)} className="text-gray-500 text-lg px-2">
            <TiDelete/>
          </button>

        </div>

      </div>
    </div>
         })
      ) : (
        (<div className="p-40 border text-center border-gray-800">
            <h2 className="font-bold text-3xl  text-white">NOTHING HERE YET</h2>
            <p className="text-gray-500 mt-2 mb-2">Browse the library and add a lift to get today moving.</p>
            <Link href='./workouts'>
                <button className="bg text-black p-3 rounded-2xl font-bold text-[12px]">Go to workouts</button>
            </Link>
        </div>)
      )}
    </div>
  );
};

export default SavedCard;
