import { ArrowUp } from "../components/ArrowUp"
import { AboutMe } from "./AboutMe"
import { Contact } from "./Contact"
import { Hero } from "./Hero"
import { Projects } from "./Projects"

export const CoreContent = () => {
  return (
    <div className="px-8 md:px-10">
        <Hero />
        <AboutMe />
        <Projects />
        <Contact />
        <ArrowUp />
    </div>
  )
}
