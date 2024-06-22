import { Header } from "./components/Header"
import { CoreContent } from "./pages/CoreContent"
import { Footer } from "./components/Footer"

import dots from "./assets/elements/dots.png"
import ximage from "./assets/elements/x.png"
import balls from "./assets/elements/balls.png"

export const App = () => {
  return (
    <div className='font-body text-cl-white min-h-screen bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-cl-purple via-cl-purple2 to-cl-full-black'>
      <div>
        <Header />
        <CoreContent />
        <Footer />

        
        <img src={ dots } alt="" className="absolute max-w-28 md:max-w-60 top-[150px] md:top-3/4 left-0 z-0 opacity-50" />

        <img src={ ximage } alt="" className="absolute max-w-10 md:max-w-16 md:right-52 right-12 top-[350px] md:top-32 z-0 opacity-50" />

        <img src={ balls } alt="" className="absolute top-[850px] md:top-[900px] -right-0 max-w-28 md:max-w-full z-0 opacity-50" />

        <img src={ ximage } alt="" className="absolute max-w-10 md:max-w-16 top-[2355px] md:top-[1050px] left-3 md:left-72 z-0 opacity-50" />

        <img src={ dots } alt="" className="absolute max-w-28 md:max-w-60 top-[1700px] md:top-[1600px] rotate-180 right-0 z-0 opacity-50" />

        <img src={ balls } alt="" className="absolute top-[3300px] md:top-[1400px] left-0 max-w-28 rotate-180 md:max-w-full z-0 opacity-50" />

      </div>
    </div>
  )
}

