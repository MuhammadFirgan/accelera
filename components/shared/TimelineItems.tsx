import Image from "next/image";
import Link from "next/link";

const missions = [
  {
    title: "Innovative AI Solutions",
    description: "Pioneering cutting-edge artificial intelligence technologies that transform business operations and drive digital transformation across industries.",
    image: "innovation.png"
  },
  {
    title: "Strategic IT Consulting",
    description: "Delivering comprehensive IT consulting services that align technology infrastructure with business objectives, ensuring scalable and sustainable growth.",
    image: "innovation.png"
  },
  {
    title: "Client-Centric Excellence",
    description: "Building lasting partnerships through personalized service, understanding unique business needs, and delivering solutions that exceed expectations.",
    image: "innovation.png"
  },
  {
    title: "Continuous Innovation",
    description: "Fostering a culture of research and development, staying ahead of technology trends to deliver next-generation solutions.",
    image: "innovation.png"
  }
]



export default function Timeline() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 relative">
      {/* Center Line */}
      <div className="absolute left-0 top-6 bottom-20 w-1 bg-gray-200 md:left-1/2 md:-translate-x-1/2 md:top-8"></div>
      {/* Scroll Icon */}

      {missions.map((item, index) => (
        <div
          key={index}
          className={`flex mb-8 ml-3 md:mr-0 md:mb-12 relative ${
            index % 2 === 0 ? "justify-start" : "justify-end"
          }`}
        >
          <div
            className={`bg-white/90 dark:bg-gray-900/90 border border-gray-200 dark:border-gray-700/50 
              shadow-lg rounded-md w-full md:w-[calc(50%-2.5rem)] relative ${
              index % 2 === 0 ? "md:mr-10" : "md:ml-10"
            }`}
          >

            <div
              className={`absolute top-7 w-3 h-3 bg-white/90 dark:bg-gray-900/90 border border-gray-200 dark:border-gray-700/50 
              shadow-lg rotate-45 z-[-1] hidden md:block ${
                index % 2 === 0 ? "right-[-0.375rem]" : "left-[-0.375rem]"
              }`}
            ></div>
            {/* Details */}
            <div className="flex flex-col mb-2 px-5 py-3 gap-4">
              <span className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">{item.title}</span>
              <p className=" text-gray-600 dark:text-gray-100">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}