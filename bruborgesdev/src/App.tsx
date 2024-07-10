import { Header } from "./components/Header"
import { CoreContent } from "./pages/CoreContent"
import { Footer } from "./components/Footer"

export const App = () => {
  return (
    <div className='font-body text-cl-white min-h-screen bg-custom-mb md:bg-custom-dk lg:bg-custom-dk bg-cover bg-fixed bg-no-repeat'>
      <div>
        <Header />
        <CoreContent />
        <Footer />
      </div>
    </div>
  )
}

