import { Header } from "./components/Header"
import { Home } from "./pages/Home"
import { AboutMe } from "./pages/AboutMe"
import { Projects } from "./pages/Projects"
import { Contact } from "./pages/Contact"
import { Footer } from "./components/Footer"
import { ArrowUp } from "./components/ArrowUp"

export const App = () => {
  return (
    <div className='font-body text-cl-white min-h-screen bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-cl-purple via-cl-purple2 to-cl-full-black pt-4'>
      <div className="mx-2 md:mx-10">
      <Header />
      <Home />
      <AboutMe />
      <Projects />
      <Contact />
      <ArrowUp />

      <img src="src/assets/elements/dots.png" alt="" className="absolute w-60 top-2/3 left-0" />
      <img src="src/assets/elements/x.png" alt="" className="absolute w-16 right-40 top-64" />
      <img src="src/assets/elements/balls.png" alt="" className="absolute top-[1200px] -right-0" />
      <img src="src/assets/elements/x.png" alt="" className="absolute w-16 top-[1450px] -left-54" />
      <img src="src/assets/elements/dots.png" alt="" className="absolute w-60 top-[1850px] -right-40" />
      </div>
      <Footer />
    </div>
  )
}

