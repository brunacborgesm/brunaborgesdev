import { TechSlider } from "../components/TechSlider"


export const AboutMe = () => {
    return (
        <div id="about_me" className="h-screen flex flex-col justify-center md:h-full md:mt-20">
            <h1 className="text-4xl font-title text-cl-green text-center pb-12 md:pb-20">Sobre mim</h1>
            <div className="flex flex-col items-center gap-14 md:flex-row lg:px-28 md:justify-center">
                <section className="text-center leading-7 text-lg md:text-justify  md:w-3/6">
                    <p>Desenvolvedora com três anos de experiência em tecnologia. Utilizo o ReactJS e estou aprimorando minhas habilidades em Back-end com Node.js para oportunidades como Full-Stack Developer.</p>
                    
                    <p>Minha trajetória destaca-se pela colaboração e determinação no desenvolvimento front-end. Orientada para resultados, sou reconhecida por enfrentar desafios com determinação e excelência.</p>
                </section>
                <aside className=" md:w-3/6">
                    <h1 className="text-3xl font-title text-cl-green flex justify-center pb-3">Techs</h1>
                    <TechSlider />
                </aside>
            </div>
        </div>
    )
}
