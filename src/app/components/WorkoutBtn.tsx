/* eslint-disable react/no-unescaped-entities */
'use client';  
import { FaFileDownload } from 'react-icons/fa';
import { IWorkout } from '../type/type';
import { useContext } from 'react';
import { WorkoutContext } from '../context/Context';
import { toast } from 'react-toastify';

const WorkoutBtn = ({workout}:{workout:IWorkout}) => {  
    const {myPlan, setMyPlan} = useContext(WorkoutContext); 
    const handleWorkout = ()=>{
       const remaining =  myPlan.some((item:IWorkout) => item.id === workout.id);
       if(remaining){
            toast.info(`Already added.`)
            return;           
       }
          setMyPlan([...myPlan, workout]);
        toast.success(`You have added ${workout.name}`)
    }

    return (
        <div>
            <button onClick={()=>handleWorkout()} className="bg p-3 px-6 text-black font-bold rounded-2xl flex items-center gap-2"><FaFileDownload />Add to today's plan</button>
        </div>
    );
};

export default WorkoutBtn;