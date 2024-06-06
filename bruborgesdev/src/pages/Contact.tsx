import { SocialButton } from "../components/SocialButton"

export const Contact = () => {
    return (
        <div id="contact" className="h-screen flex flex-col items-center justify-center md:h-full md:mb-32">

            <h1 className="text-4xl font-title text-cl-green flex justify-center pb-20">Contatos</h1>
            <div className='flex flex-col items-center gap-24 md:flex-row md:justify-center'>
                
                <SocialButton text="@brunacborgesm" social="Linkedin" img="src/assets/linkedin.png" url={"https://www.linkedin.com/in/brunacborgesm/"} />

                <SocialButton text="@brunacborgesm" social="GitHub" img="src/assets/github.png" url={"https://github.com/brunacborgesm/"} />

                <SocialButton text="brunaborgesdev@gmail.com" social="Gmail" img="src/assets/gmail.png" url={"https://github.com/brunacborgesm?tab=repositories"} />

            </div>

        </div>
    )
}