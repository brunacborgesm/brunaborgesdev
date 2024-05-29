import { SocialButton } from "../components/SocialButton"

export const Contact = () => {
    return (
        <div id="contact" className="py-48">

            <h1 className="text-6xl font-title text-cl-green flex justify-center pb-20">Contatos</h1>
            <div className='flex justify-center items-center gap-32'>
                <SocialButton text="@brunacborgesm" social="Linkedin" img="src/assets/linkedin.png" url={"https://www.linkedin.com/in/brunacborgesm/"} />

                <SocialButton text="@brunacborgesm" social="GitHub" img="src/assets/github.png" url={"https://github.com/brunacborgesm/"} />

                <SocialButton text="brunaborgesdev@gmail.com" social="Gmail" img="src/assets/gmail.png" url={"https://github.com/brunacborgesm?tab=repositories"} />

            </div>

        </div>
    )
}