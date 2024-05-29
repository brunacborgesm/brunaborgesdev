import { useEffect, useState } from 'react';
import { DefaultButton } from './DefaultButton';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`md:sticky flex w-full items-center justify-between  md:border md:rounded-full md:py-3 md:px-6 md:${isScrolled ? 'fixed top-2 left-0 w-full backdrop-blur-md bg-opacity-60 bg-gray-900 z-10 border rounded-full' : ''}`}>
      <div>
        <a href="#home">
          <img className="md:hidden w-12 h-8 ml-4" src='src/assets/bb-logo.png' alt="" />
          <h1 className="hidden md:block text-2xl text-cl-lavander"><span className="text-cl-green">bru.</span>borges</h1>
        </a>
      </div>
      <ul className="flex gap-10">
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
      <DefaultButton url="#contact" text="Entre em contato" />
    </header>
  );
};
