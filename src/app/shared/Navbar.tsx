'use client';
import Image from 'next/image';
import logo from '@/assets/logo.png';
import Link from 'next/link';
import { WorkoutContext } from '../context/Context';
import { useContext } from 'react';

const Navbar = () => {

    const {myPlan, saved} = useContext(WorkoutContext); 

    return (
   <div className='border-b-2 sticky top-0 z-50 bg-black '>
        <nav className='m-8 flex justify-between text-white'>
        {/* part1 */}
            <div className='flex gap-2'>
                <Image src={logo} height={30} width={30} alt='logo'/>
                <h2 className='font-bold text-lg'><Link href='./'>FITLOG</Link></h2>
            </div>
        {/* part2 */}
            <div className='flex gap-6 '>
                <Link className=' text-[#C2F800] bg-[#393f26] p-1 px-2 py-2 rounded-[50] text-[11px] ' href='./workouts'>Workouts</Link>
                <Link className='text-[11px] text-gray-500 p-1 px-2 py-2' href='./plan'>My Plan</Link>
            </div>
        {/* part3 */}
            <div className='flex gap-2'>
                <button><Link className='' href=''>Plan <span className='bg p-0.5 rounded-[50%] text-black'>{myPlan.length}</span></Link></button>
                <button><Link className='' href=''>Saved {saved.length}</Link></button>
            </div>
       </nav>
   </div>
    );
};

export default Navbar;