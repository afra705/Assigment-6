'use client';  
import { FaBookmark } from 'react-icons/fa';
import { IWorkout } from '../type/type';
import { useContext } from 'react';
import { WorkoutContext } from '../context/Context';
import { toast } from 'react-toastify';
const SavedBtn = ({workout}:{workout:IWorkout}) => {
    const {saved, setSaved} = useContext(WorkoutContext); 
        const handleSaved = ()=>{
           const remaining =  saved.some((item:IWorkout) => item.id === workout.id);
           if(remaining){
                toast.info(`Already added.`)
                return;           
           }
              setSaved([...saved, workout]);
            toast.success(`You have added ${workout.name}`)
        }
    return (
        <div>
            <button onClick={()=>handleSaved()} className="border px-6 border-gray-500 rounded-2xl white p-3 flex items-center gap-2"><FaBookmark /> Save for later</button>
        </div>
    );
};

export default SavedBtn;