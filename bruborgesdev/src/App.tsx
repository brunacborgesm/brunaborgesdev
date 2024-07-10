import { Header } from "./components/Header"
import { CoreContent } from "./pages/CoreContent"
import { Footer } from "./components/Footer"

import dots from "./assets/elements/dots.png"
import ximage from "./assets/elements/x.png"
import balls from "./assets/elements/balls.png"

export const App = () => {
  return (
    <div className='font-body text-cl-white min-h-screen bg-custom-mb md:bg-custom-dk bg-cover bg-fixed bg-no-repeat'>
      <div>
        <Header />
        <CoreContent />
        <Footer />
      </div>
    </div>
  )
}

