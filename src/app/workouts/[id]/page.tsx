/* eslint-disable react/no-unescaped-entities */
import { IWorkout } from "@/app/type/type";
import Image from "next/image";
import { FaBookmark, FaFileDownload } from "react-icons/fa";

interface IDetailsProps {
  params: Promise<{
    id: string;
  }>;
}

const WorkoutDetails = async ({ params }: IDetailsProps) => {
  const { id } = await params;
  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
  const data = await res.json();

  const workout: IWorkout = data;

  return (
   <section className="lg:w-7xl mx-auto">
     <div className="grid grid-cols-2 mt-6  white card lg:card-side shadow-sm">
      <figure>
        <Image
          src={workout.image}
          alt="Album"
          width={400}
          height={700}
          className="h-167.5 w-115 rounded-2xl"
        />
      </figure>
{/*  */}
      <div className="mr-20">
              <div className="mt-14">
        <h2 className="text-3xl font-bold font-stretch-extra-condensed">
          {workout.name}
        </h2>
        <p className="text-gray-500 mt-3 mb-3">{workout.description}</p>
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
        {/*  */}
      <div className="p-5 rounded-2xl mt-5 bg-[#29292b]">
        <p className="flex justify-between border-b border-gray-600 pb-3">
          <span className="text-gray-400">EQUIPMENT</span>
          <span>{workout.equipment}</span>
        </p>

        <p className="flex justify-between border-b border-gray-600 py-3">
          <span className="text-gray-400">DIFFICULTY</span>
          <span>{workout.difficulty}</span>
        </p>

        <p className="flex justify-between border-b border-gray-600 py-3">
          <span className="text-gray-400">SETS</span>
          <span>{workout.sets}</span>
        </p>

        <p className="flex justify-between border-b border-gray-600 py-3">
          <span className="text-gray-400">REPS</span>
          <span>{workout.reps}</span>
        </p>

        <p className="flex justify-between border-b border-gray-600 py-3">
          <span className="text-gray-400">DURATION</span>
          <span>{workout.duration}</span>
        </p>

        <p className="flex justify-between border-b border-gray-600 py-3">
          <span className="text-gray-400">CALORIES</span>
          <span>{workout.caloriesBurned}</span>
        </p>

        <p className="flex justify-between pt-3">
          <span className="text-gray-400">RATING</span>
          <span>{workout.rating}</span>
        </p>
      </div>

        <div className="mt-5 mb-5 card-actions text-gray-400">
            <h2 className="text-1xl white w-100">INSTRUCTION</h2>
            <p>1.Lie on the bench with eyes under the bar and feet planted.</p>
            <p>2.Unrack with locked elbows and lower the bar to mid-chest.</p>
            <p>3.Press up in a slight arc until elbows lock without bouncing.</p>
            <p>4. Keep shoulder blades pinched and a natural arch in the back.</p>
        </div>
        {/* btn */}
        <div className="flex gap-2">
          <button className="bg p-3 px-6 text-black font-bold rounded-2xl flex items-center gap-2"><FaFileDownload />Add to today's plan</button>
          <button className="border px-6 border-gray-500 rounded-2xl white p-3 flex items-center gap-2"><FaBookmark /> Save for later</button>
        </div>
      </div>
      </div>
    </div>
   </section>
  );
};

export default WorkoutDetails;
