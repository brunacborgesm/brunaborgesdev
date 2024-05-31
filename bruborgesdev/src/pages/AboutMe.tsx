import { TechSlider } from "../components/TechSlider"


export const AboutMe = () => {
    return (
        <div id="about_me" className="h-screen flex flex-col justify-center max-w-2xl">
            <h1 className="text-4xl font-title text-cl-green text-center pb-12">Sobre mim</h1>
            <div className="flex flex-col items-center gap-14">
                <section className="text-center leading-7 text-lg p-7">
                    <p>Sou uma desenvolvedora apaixonada por criar experiências digitais com três anos de experiência em tecnologia. Especialista em ReactJS, estou aprimorando minhas habilidades em Back-end com Node.js para me tornar Full-Stack Developer. Minha trajetória destaca-se pela colaboração eficaz e determinação no desenvolvimento front-end. Sou reconhecida por enfrentar desafios com determinação, sempre buscando excelência e sendo orientada para resultados.</p>
                </section>
                <aside>
                    <h1 className="text-3xl font-title text-cl-green flex justify-center pb-6">Techs</h1>
                    <TechSlider />
                </aside>
            </div>
        </div>
    )
}
