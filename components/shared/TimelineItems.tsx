import { Star } from "lucide-react";

export default function TimelineItems() {
  return (
    <div className="flex justify-between">
      <div className="flex justify-start ml-4 md:ml-0 md:justify-center md:items-center">
        <div className="h-96 w-1 bg-indigo-950/10 dark:bg-white"></div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex justify-start ">
          {/* <div className="absolute top-0 left-1/2 -translate-x-4 md:left-0 md:-translate-x-0 flex gap-4"> */}
          <div className="flex gap-4 -ml-5">
            <div className="">
              <Star className=" bg-blue-500 text-white p-4 rounded-lg"/>
            </div>
            <div className="relative bg-blue-500/30 w-full backdrop-blur-md rounded-lg border border-blue-300/20 shadow-lg p-4 h-52">
              <h1>give me some heading</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui magni reiciendis animi!</p>
            </div>
          </div>

        </div>
        <div className="flex justify-start md:justify-end">
          {/* <div className="absolute top-0 left-1/2 -translate-x-4 md:left-0 md:-translate-x-0 flex gap-4"> */}
          <div className="flex gap-4 -ml-5">
            <div className="">
              <Star className=" bg-blue-500 text-white p-4 rounded-lg"/>
            </div>
            <div className="relative bg-blue-500/30 w-full backdrop-blur-md rounded-lg border border-blue-300/20 shadow-lg p-4 h-52">
              <h1>give me some heading</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui magni reiciendis animi!</p>
            </div>
          </div>

        </div>
      </div>
      
    </div>
  )
}
