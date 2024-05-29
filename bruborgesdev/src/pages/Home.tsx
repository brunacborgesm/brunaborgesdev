export const Home = () => {
    return (
        <div id="home" className="mt-32">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <div className="flex flex-col">
                    <span className="text-left text-cl-green"> {'<developer>'} </span>
                    <h1 className="text-7xl max-w-60 font-title">Bruna Borges</h1>
                    <span className="text-right pt-2 text-cl-green"> {'<developer>'} </span>
                </div>
                <img className="w-96 h-96" src="src/assets/profileimg.png" alt="" />
                <div className="flex flex-col text-right">
                    <h2 className="text-3xl font-title text-cl-green"> Full-stack Developer</h2>
                    <span className=" max-w-72 text-lg">Desenvolvendo websites funcionais, responsivos e bonitos.</span>
                </div>
            </div>

        </div>
    )
}
