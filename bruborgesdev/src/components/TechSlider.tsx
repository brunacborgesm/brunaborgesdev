import Marquee from 'react-fast-marquee';

import html from "../assets/techs/html.png"
import css from "../assets/techs/css.png"
import js from "../assets/techs/js.png"
import react from "../assets/techs/react.png"
import ts from "../assets/techs/ts.png"
import tailwind from "../assets/techs/tailwind.png"
import mui from "../assets/techs/material.png"
import node from "../assets/techs/node.png"

export const TechSlider = () => {
  return (
    <Marquee className='bg-transparent border-t border-t-cl-lavander border-b border-b-cl-lavander w-full overflow-hidden autoFill hover:pause py-2'>
      
      <div className='cursor-pointer'>
        <img src={ html } alt="html icon" />
      </div>

      <div className='cursor-pointer px-2'>
        <img src={ css } alt="css icon" />
      </div>

      <div className='cursor-pointer px-2'>
        <img src={ js } alt="javascript icon" />
      </div>

      <div className='cursor-pointer px-2'>
        <img src={ react } alt="react icon" />
      </div>

      <div className='cursor-pointer px-2'>
        <img src={ ts } alt="typescript icon" />
      </div>

      <div className='cursor-pointer px-2'>
        <img src={ tailwind } alt="tailwind icon" />
      </div>

      <div className='cursor-pointer px-4 py-8'>
        <img className='w-16 h-16' src={ mui } alt="material ui icon" />
      </div>

      <div className='cursor-pointer px-2'>
        <img src={ node } alt="node icon" />
      </div>

    </Marquee>
  );
}
