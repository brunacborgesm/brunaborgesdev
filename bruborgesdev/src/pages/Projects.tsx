import { DefaultButton } from "../components/DefaultButton"
import GitHubIcon from '@mui/icons-material/GitHub';

export const Projects = () => {
    return (
        <div id="projects" className="py-48">
            <h1 className="text-6xl font-title text-cl-green flex justify-center pb-20">Projetos</h1>
            <div className="flex justify-center gap-14">
                <div className="max-w-lg text-justify leading-7">
                    <p>No momento estou selecionando os projetos que vão ser expostos nessa área.
                    </p>
                    <p>Caso tenha interesse, logo abaixo, pode ser acessado o meu GitHub. Fique a vontade para dar uma olhada em meus repositórios.
                    </p>
                </div>
                <div className="text-lg flex items-center justify-center">
                    <DefaultButton icon={<GitHubIcon className="mx-2" />} text="GitHub" url="https://github.com/brunacborgesm?tab=repositories" />
                </div>
            </div>
        </div>
    )
}
