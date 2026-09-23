import Image from 'next/image';
import logo from '@/assets/logo.png';
import Link from 'next/link';

const Navbar = () => {
    return (
       <nav className='sticky top-0 z-50 bg-black m-6 flex justify-between text-white'>
        {/* part1 */}
            <div className='flex gap-2'>
                <Image src={logo} height={30} width={30} alt='logo'/>
                <h2 className='font-bold text-lg'>FITLOG</h2>
            </div>
        {/* part2 */}
            <div className='flex gap-6 '>
                <Link className=' text-[#C2F800] bg-[#393f26] p-1 px-2 py-2 rounded-[50] text-[11px] ' href=''>Workouts</Link>
                <Link className='text-[11px] p-1 px-2 py-2' href=''>My Plan</Link>
            </div>
        {/* part3 */}
            <div className='flex gap-2'>
                <button><Link className='' href=''>Plan {0}</Link></button>
                <button><Link className='' href=''>Saved {0}</Link></button>
            </div>
       </nav>
    );
};

export default Navbar;