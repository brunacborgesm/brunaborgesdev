import { ProjectCard } from "../components/ProjectCard";

import todoimg from '../assets/project-img/todo-app.png'

export const Projects = () => {
    return (
        <div id="projects" className="h-full py-32 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-title text-cl-green flex flex-col justify-center pb-20">Projetos</h1>

            <div className="flex flex-col md:flex-row md:justify-center gap-6 md:gap-8 md:flex-wrap">
                
                <ProjectCard
                    img={ todoimg }
                    title="To Do App"
                    description="App de lista de tarefas, com botões de mover e excluir"
                    tags={['react', 'javascript', 'tailwind']}
                    git="https://github.com/brunacborgesm/to-do-app"
                    url="https://brunacborgesm.github.io/to-do-app/"
                />

                <ProjectCard
                    img="src/assets/linkedin.png"
                    title="Projeto 2"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    tags={['teste', 'teste', 'teste']}
                    git=""
                    url=""
                />

                <ProjectCard
                    img="src/assets/linkedin.png"
                    title="Projeto 2"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    tags={['teste', 'teste', 'teste']}
                    git=""
                    url=""
                />
                
            </div>
        </div>
    )
}
