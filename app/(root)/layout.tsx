import { Footer } from "@/components/shared/Footer"
import { Navbar } from "@/components/shared/Navbar"

export default function layout({children}: {children: React.ReactNode}) {
  return (
    <>  
        <Navbar />
        <main className="relative">
            {children}
        </main>
        <Footer />
    </>
  )
}
