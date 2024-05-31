export const Home = () => {
    return (
        <div id="home" className="mt-16 h-screen">
            <div className="flex flex-col items-center justify-center gap-4">
                <div className="flex flex-col max-w-48">
                    <span className="text-left text-cl-green"> {'<developer>'} </span>
                    <h1 className="text-6xl font-title">Bruna Borges</h1>
                    <span className="text-right pt-2 text-cl-green"> {'<developer>'} </span>
                </div>
                <img className="w-72 h-72" src="src/assets/profileimg.png" alt="" />
                <div className="flex flex-col text-center ">
                    <h2 className="text-3xl font-title text-cl-green"> Full-stack Developer</h2>
                    <span className="text-lg">Desenvolvendo aplicações web robustas usando React, Node.js, Tailwind CSS, entre outros...</span>
                </div>
            </div>

        </div>
    )
}
