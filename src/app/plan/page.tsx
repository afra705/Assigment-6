import React from "react";
import TodaysPlanCard from "../components/TodaysPlanCard";
import { IWorkout } from "../type/type";

const Plan = ({workout}:{workout:IWorkout}) => {
  return (
    <div className="lg:w-7xl mx-auto white m-10">
      {/* part1 */}
      <div>
        <h1 className="text-4xl font-bold">MY PLAN</h1>
        <p className="text-gray-500">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>
      {/* part2 */}
      {/* <div>
                <div>
                    <span>Exercise</span>
                    <span>{}</span>
                </div>
            </div> */}

      {/* part3 */}
      {/* name of each tab group should be unique */}
      <div className="tabs mt-40 ">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab bg-gray-900 text-gray-400 w-30 rounded-l-2xl"
          aria-label="Today's Plan"
        />
        <div className="tab-content p-6">
           <TodaysPlanCard workout={workout}/>
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab bg-gray-800 text-gray-400 w-30 rounded-r-2xl"
          aria-label="Saved"
          defaultChecked
        />
        <div className="tab-content p-6">
          Tab content 2
        </div>

      </div>
    </div>
  );
};

export default Plan;
