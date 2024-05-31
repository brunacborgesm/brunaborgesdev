import { ProjectCard } from "../components/ProjectCard";

export const Projects = () => {
    return (
        <div id="projects" className="h-full py-32 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-title text-cl-green flex flex-col justify-center pb-20">Projetos</h1>
            <ProjectCard img="src/assets/linkedin.png" tags={['teste', 'teste']}/>

            <ProjectCard img="src/assets/linkedin.png" tags={['teste', 'teste', 'teste']}/>
        </div>
    )
}
