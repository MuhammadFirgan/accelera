import Image from 'next/image';

const TeamCard = () => {
  return (
    // <div className="w-52 flex flex-col items-center p-4 bg-transparent rounded-lg shadow-lg transform transition duration-300 hover:scale-105 relative border-2 border-transparent border-gradient">
    //     <div className="w-48 h-64 relative rounded-lg overflow-hidden">
    //         <Image
    //         src="/images/team.jpg"
    //         alt="team photo"
    //         layout="fill"
    //         objectFit="cover"
    //         className="filter grayscale hover:filter-none transition duration-300"
    //         />
    //     </div>
    //     <h3 className="mt-4 text-black dark:text-white text-xl font-bold">Firgan</h3>
    //     <p className="text-blue-400 text-sm">Frontend</p>
    //     {/* <div className="absolute inset-[-2px] rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 -z-10" /> */}
    // </div>
   
    <div className="relative w-3/4 md:w-52 flex flex-col items-center p-5  bg-zinc-100 dark:bg-zinc-900 rounded-lg transform transition duration-300 ">
        <div className="absolute inset-0 z-[-1] rounded-lg bg-gradient-to-tr from-blue-600 to-purple-600 blur-md opacity-75"></div>
        
        <div className="w-full h-56 md:w-48 md:h-64 relative rounded-lg overflow-hidden z-0">
            <Image
                src="/images/team.jpg"
                alt="team photo"
                layout="fill"
                objectFit="cover"
                className="filter grayscale hover:filter-none transition duration-300"
            />
            <div className="bg-[#007bff]/50 text-white text-xs z-50 absolute top-2 left-2 px-2 py-1 rounded-lg border border-[#007bff]">
                <span>Product Manager</span>
            </div>
        </div>
        <h3 className="mt-4 text-primary text-xl md:text-sm md:text-center font-bold">Muhammad Firgan</h3>
    </div>
  );
};

export default TeamCard;