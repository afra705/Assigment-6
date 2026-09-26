/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import banner from '@/assets/banner.png';

const Banner = () => {
    return (
      <section className='bg-[#222630] m-10 rounded-2xl'>
          <header className='flex md:gap-30 lg:gap-40 p-20 flex-col-reverse md:flex-row'>
            {/* part1 */}
            <div className='w-full md:w-1/2'>
                <p className='text-color'>WORKOUT LIBRARY</p>
                <h1 className='font-bold text-3xl md:text-5xl lg:text-6xl text-white mt-6 mb-6'><span className="lg:whitespace-nowrap">TRAIN WITH INTENT. </span>
               LOG EVERY SET.</h1>
                <p className='text-gray-500 mb-6'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br />
                into today's plan, and watch the week's work add up.</p>
                <button className='bg p-5 text-black py-4 rounded-2xl font-bold text-[12px]'><a href="#library"> BROWSE WORKOUTS</a></button>
            </div>
            {/* part2 */}
            <div>
                <Image src={banner} alt='banner' height={600} width={400}/>
            </div>
        </header>
      </section>
    );
};

export default Banner;