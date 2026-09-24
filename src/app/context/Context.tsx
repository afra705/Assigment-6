'use client';
import React, { createContext, ReactNode, useState } from 'react';
import { IWorkout } from '../type/type';

interface IContextProps{
    myPlan: IWorkout[];
    setMyPlan: React.Dispatch<React.SetStateAction<IWorkout[]>>;
    saved: IWorkout[];
    setSaved: React.Dispatch<React.SetStateAction<IWorkout[]>>;

}

export const WorkoutContext = createContext<IContextProps>({
    myPlan: [],
    setMyPlan: () => {},
    saved: [],
    setSaved: () => {},
})

const WorkoutProvider = ({children}:{children:ReactNode}) => {

    const [myPlan, setMyPlan] = useState<IWorkout[]>([]);
    const [saved, setSaved] = useState<IWorkout[]>([]);
    const sharedData ={
        myPlan,
        setMyPlan,
        saved,
        setSaved
    }

    return (
        <WorkoutContext.Provider value={sharedData}>
            {children}
        </WorkoutContext.Provider>
    );
};

export default WorkoutProvider;