import React from 'react';
import { getAllWorkouts } from '../lib/feching';
import { IWorkout } from '../type/type';

const WorkoutPage = async() => {
    const data = await getAllWorkouts();

    return (
        <div className='m-14'>
            <h1 className='white font-bold text-4xl'>THE LIBRARY</h1>
            <p className='text-gray-500 text-[15px]'>Twelve lifts covering every major muscle group.</p>
            <div className='white'>
                {
                    data.map((workout:IWorkout)=>{
                        return <p key={workout.id}>{workout.name}</p>
                    })
                }
            </div>
        </div>
    );
};

export default WorkoutPage;