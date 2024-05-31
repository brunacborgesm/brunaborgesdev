import { useState } from 'react';
import { DefaultButton } from './DefaultButton';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='flex justify-between items-center p-4 bg-cl-purple'>

      <div >
        <a href="#home">
          <img className="md:hidden w-12 h-8" src='src/assets/bb-logo.png' alt="" />
          <h1 className="hidden md:block text-2xl text-cl-lavander">
            <span className="text-cl-green">bru.</span>borges
          </h1>
        </a>
      </div>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-3xl">
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-gray-900 p-5 flex flex-col items-center">
            <ul className="flex flex-col gap-5 w-full items-center">
              <li className="hover:text-cl-green border-animation">
                <a href="#home" onClick={() => setIsMenuOpen(false)}>{'<home>'}</a>
              </li>
              <li className="hover:text-cl-green border-animation">
                <a href="#about_me" onClick={() => setIsMenuOpen(false)}>{'<sobre mim>'}</a>
              </li>
              <li className="hover:text-cl-green border-animation">
                <a href="#projects" onClick={() => setIsMenuOpen(false)}>{'<projetos>'}</a>
              </li>
              <li className="hover:text-cl-green border-animation">
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>{'<contato>'}</a>
              </li>
            </ul>
            <DefaultButton url="#contact" text="Entre em contato" />
          </div>
        )}
      </div>

      <ul className="hidden md:flex gap-10">
        <li className="hover:text-cl-green border-animation">
          <a href="#home">{'<home>'}</a>
        </li>
        <li className="hover:text-cl-green border-animation">
          <a href="#about_me">{'<sobre mim>'}</a>
        </li>
        <li className="hover:text-cl-green border-animation">
          <a href="#projects">{'<projetos>'}</a>
        </li>
        <li className="hover:text-cl-green border-animation">
          <a href="#contact">{'<contato>'}</a>
        </li>
      </ul>

      <div className="hidden md:block">
        <DefaultButton url="#contact" text="Entre em contato" />
      </div>
    </header>
  );
}