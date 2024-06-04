export const Home = () => {
    return (
        <div id="home" className="mt-16 h-screen md:h-full">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10">
                <div className="flex flex-col max-w-48 md:max-w-80">
                    <span className="text-left text-cl-green"> {'<developer>'} </span>
                    <h1 className="text-6xl font-title md:text-5xl">Bruna Borges</h1>
                    <span className="text-right pt-2 text-cl-green"> {'<developer>'} </span>
                </div>
                <img className="w-72 h-72 md:w-80 md:h-80" src="src/assets/profileimg.png" alt="" />
                <div className="flex flex-col text-center md:max-w-64">
                    <h2 className="text-3xl font-title text-cl-green">Full-stack Developer</h2>
                    <span className="text-lg md:text-justify">Desenvolvendo aplicações web utilizando React no front e Node.js no back</span>
                </div>
            </div>

        </div>
    )
}
