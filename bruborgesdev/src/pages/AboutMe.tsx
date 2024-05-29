export const AboutMe = () => {
  return (
    <div id="about_me" className="py-48 mx-auto">
        <h1 className="text-6xl font-title text-cl-green flex justify-center pb-20">Sobre mim</h1>
        <div className="flex justify-center gap-14">
            <section className="max-w-2xl border-r border-r-cl-lavander pr-11 text-justify leading-7 text-xl">Sou uma desenvolvedora apaixonada por criar experiências digitais com três anos de experiência em tecnologia. Especialista em ReactJS, estou aprimorando minhas habilidades em Back-end com Node.js para me tornar Full-Stack Developer. Minha trajetória destaca-se pela colaboração eficaz e determinação no desenvolvimento front-end. Sou reconhecida por enfrentar desafios com determinação, sempre buscando excelência e sendo orientada para resultados.</section>
            <aside className="max-w-2xl">
                <h1 className="text-2xl font-title text-cl-green flex justify-center pb-6">Techs</h1>
                <div className="flex gap-4">
                    <img className="w-14 h-14" src="src/assets/techs/html.png" alt="html icon"  />
                    <img className="w-14 h-14" src="src/assets/techs/css.png" alt="css icon" />
                    <img className="w-14 h-14" src="src/assets/techs/js.png" alt="javascript icon" />
                    <img className="w-14 h-14" src="src/assets/techs/react.png" alt="react icon" />
                </div>
                <div className="flex pt-5 gap-4">
                    <img className="w-14 h-14" src="src/assets/techs/ts.png" alt="typescript icon" />
                    <img className="w-14 h-14" src="src/assets/techs/tailwind.png" alt="tailwind icon" />
                    <img className="w-14 h-14" src="src/assets/techs/material.png" alt="material ui icon" />
                    <img className="w-14 h-14" src="src/assets/techs/node.png" alt="node icon" />
                </div>
            </aside>
        </div>
    </div>
  )
}
