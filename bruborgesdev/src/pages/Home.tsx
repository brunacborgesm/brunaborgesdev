export const Home = () => {
    return (
        <div className="my-20 h-full">
            <div className="flex flex-col items-center justify-center gap-4 md:gap-7 md:flex-row">

                <div className="flex flex-col max-w-48 lg:max-w-96">
                    <span className="text-left text-cl-green"> {'<developer>'} </span>
                    <h1 className="text-6xl font-title md:max-w-64 lg:max-w-96">Bruna Borges</h1>
                    <span className="text-right mt-2 text-cl-green"> {'</developer>'} </span>
                </div>

                <img className="w-max-w-96 h-max-w-96 md:w-80 md:h-80" src="src/assets/profileimg.png" alt="" />

                <div className="flex flex-col text-center lg:max-w-96">
                    <h2 className="text-3xl font-title text-cl-green">Full-stack Developer</h2>
                    <span className="text-lg md:text-center md:max-w-64 lg:max-w-96">Desenvolvendo aplicações web e mobile first</span>
                </div>
            </div>

        </div>
    )
}
