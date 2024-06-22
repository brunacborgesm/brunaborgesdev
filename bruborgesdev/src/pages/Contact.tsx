import { SocialButton } from "../components/SocialButton"

import linkedin from "../assets/linkedin.png"
import gmail from "../assets/gmail.png"
import github from "../assets/github.png"

export const Contact = () => {
    return (
        <div id="contact" className="h-screen flex flex-col items-center justify-center md:h-full md:mb-32">

            <h1 className="text-4xl font-title text-cl-green flex justify-center pb-20">Contatos</h1>
            <div className='flex flex-col items-center gap-24 md:flex-row md:justify-center'>
                
                <SocialButton text="@brunacborgesm" social="Linkedin" img={ linkedin } url={"https://www.linkedin.com/in/brunacborgesm/"} />

                <SocialButton text="@brunacborgesm" social="GitHub" img={ github } url={"https://github.com/brunacborgesm/"} />

                <SocialButton text="brunaborgesdev@gmail.com" social="Gmail" img={ gmail } url={"mailto:brunaborgesdev@gmail.com"} />

            </div>

        </div>
    )
}