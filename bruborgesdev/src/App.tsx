import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { ArrowUp } from "./components/ArrowUp"
import { CoreContent } from "./pages/CoreContent"

export const App = () => {
  return (
    <div className='font-body text-cl-white min-h-screen bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-cl-purple via-cl-purple2 to-cl-full-black'>
      <div>
      <Header />
      <CoreContent />
      <ArrowUp />


      </div>
      <Footer />
    </div>
  )
}

