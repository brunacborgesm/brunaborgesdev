import profileimg from "../assets/profileimg.png"
import { DefaultButton } from "../components/DefaultButton"
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import cv from "../assets/doc/cv-pt-br.pdf"
import { KeyboardDoubleArrowDown } from "@mui/icons-material";

export const Hero = () => {
    return (
        <div className="mt-20 min-h-screen">
            <div className="flex flex-col items-center justify-center gap-4 md:gap-7 md:flex-row">

                <div className="flex flex-col max-w-40 md:max-w-40 xl:max-w-96 ">
                    <span className="text-left text-cl-green"> {'<developer>'} </span>
                    <h1 className="text-5xl font-title md:max-w-64 xl:max-w-96">Bruna Borges</h1>
                    <span className="text-right mt-2 text-cl-green"> {'</developer>'} </span>
                </div>

                <img className="w-max-w-96 h-max-w-96 md:w-80 md:h-80" src={profileimg} alt="" />

                <div className="flex flex-col text-center md:max-w-64 xl:max-w-96">
                    <h2 className="text-3xl font-title text-cl-green">Full-stack Developer</h2>
                    <p>Profissional pronta para atender suas necessidades tecnológicas</p>
                    <div className="mt-5">
                        <DefaultButton text="Download CV" icon={<FileDownloadOutlinedIcon />} url={cv} />
                    </div>
                </div>

            </div>

            <div className="mt-20 h-32 animate-bounce text-cl-lavander flex justify-center">
                <KeyboardDoubleArrowDown />
            </div>

        </div>
    )
}
