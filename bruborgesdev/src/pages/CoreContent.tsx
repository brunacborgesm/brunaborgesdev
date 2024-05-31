import { AboutMe } from "./AboutMe"
import { Contact } from "./Contact"
import { Home } from "./Home"
import { Projects } from "./Projects"

export const CoreContent = () => {
  return (
    <div className="px-2 md:px-10">
        <Home />
        <AboutMe />
        <Projects />
        <Contact />
    </div>
  )
}
