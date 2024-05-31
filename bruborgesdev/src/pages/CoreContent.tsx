import { ArrowUp } from "../components/ArrowUp"
import { AboutMe } from "./AboutMe"
import { Contact } from "./Contact"
import { Home } from "./Home"
import { Projects } from "./Projects"

export const CoreContent = () => {
  return (
    <div className="px-8 md:px-10">
        <Home />
        <AboutMe />
        <Projects />
        <Contact />
        <ArrowUp />
    </div>
  )
}
