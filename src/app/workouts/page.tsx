import React from 'react';
import { getAllWorkouts } from '../lib/feching';
import { IWorkout } from '../type/type';
import WorkoutCard from '../components/WorkoutCard';

const WorkoutPage = async() => {
    const data = await getAllWorkouts();

    return (
        <div className='m-14'>
            <h1 className='white font-bold text-4xl'>THE LIBRARY</h1>
            <p className='text-gray-500 text-[15px]'>Twelve lifts covering every major muscle group.</p>
            <div className='white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    data.map((workout:IWorkout)=>{
                        return <WorkoutCard key={workout.id} workout={workout}/>
                    })
                }
            </div>
        </div>
    );
};

export default WorkoutPage;