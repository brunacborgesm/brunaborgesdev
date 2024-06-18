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
    <header  id="hero" className='flex justify-between items-center p-6 bg-cl-purple'>

      <div >
        <a href="#hero">
          <img className="md:hidden w-12 h-8" src='src/assets/bb-logo.png' alt="" />
          <h1 className="hidden md:block text-2xl text-cl-lavander">
            <span className="text-cl-green">bru.</span>borges
          </h1>
        </a>
      </div>

      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
        {isMenuOpen && (
          <div className="absolute top-24 right-4 w-6/12 backdrop-blur-md border border-cl-purple rounded-3xl py-10 px-5 flex flex-col items-center text-xl">
            <ul className="flex flex-col gap-6 w-full items-center">
              <li className="hover:text-cl-green border-animation">
                <a href="#hero" onClick={() => setIsMenuOpen(false)}>{'<home>'}</a>
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
          </div>
        )}
      </div>

      <ul className="hidden md:flex gap-5 ">
        <li className="hover:text-cl-green border-animation">
          <a href="#hero">{'<home>'}</a>
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