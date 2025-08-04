import Image from "next/image"

interface AboutContainerProps {
    imageSrc: string
    textTitle: string
    textContent: string
    isImageFirst: boolean
    hasBackgroundImage: boolean
}

export default function AboutComponent({ imageSrc, textTitle, textContent, isImageFirst = true, hasBackgroundImage = true }: AboutContainerProps) {
  return (
    <div className="flex flex-col justify-center items-center w-full md:flex-row relative">
      {/* Gradient Effects */}
      {hasBackgroundImage && (
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute -top-40 -right-40 w-64 h-64 bg-gradient-to-r from-purple-400/30 to-blue-400/30 rounded-full blur-3xl animate-pulse hidden md:block"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-64 h-64 bg-gradient-to-r from-blue-400/30 to-indigo-400/30 rounded-full blur-3xl animate-pulse delay-1000 hidden md:block"></div>
        </div>
      )}

      {/* Image Section */}
      <Image 
        src={imageSrc}
        width={200}
        height={200}
        alt="about image"
        className={`w-full md:w-1/2 h-[400px] object-cover aspect-video ${isImageFirst ? 'order-1 md:order-1' : 'order-1 md:order-2'} z-10`}
      />

      {/* Text Content with Background Image and Overlay or Gradient */}
      <div
        className={`relative w-full md:w-1/2 h-[400px] ${isImageFirst ? 'order-2 md:order-2' : 'order-2 md:order-1'} `}
      >
        {/* Background Image and Overlay */}
        {hasBackgroundImage && (
          <div className="absolute inset-0 z-0">
            <Image
              src={imageSrc}
              alt="Background"
              layout="fill"
              objectFit="cover"
            
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 dark:from-purple-950/20 dark:via-blue-950/20 dark:to-indigo-950/20 dark:bg-black opacity-95"></div>
          </div>
        )}

        {/* Text Content */}
        <div className="relative flex flex-col justify-center items-center gap-4 p-5 h-full z-10">
          <h1 className="text-4xl font-semibold bg-gradient-to-r from-purple-600 to-[#007bff] bg-clip-text text-transparent">
            {textTitle}
          </h1>
          <p className={`leading-relaxed max-w-md ${hasBackgroundImage ? 'text-black dark:text-white' : ''}`}>
            {textContent}
          </p>
        </div>
      </div>
    </div>
  )
}
