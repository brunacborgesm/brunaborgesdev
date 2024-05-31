import Marquee from 'react-fast-marquee';

export const TechSlider = () => {
  return (
    <Marquee className='bg-transparent border-t border-t-cl-lavander border-b border-b-cl-lavander w-full overflow-hidden autoFill hover:pause'>
      
      <div className='cursor-pointer px-2 py-8'>
        <img className="w-16 h-16" src="src/assets/techs/html.png" alt="html icon" />
      </div>

      <div className='cursor-pointer px-2 py-8'>
        <img className="w-16 h-16" src="src/assets/techs/css.png" alt="css icon" />
      </div>

      <div className='cursor-pointer px-2 py-8'>
        <img className="w-16 h-16" src="src/assets/techs/js.png" alt="javascript icon" />
      </div>

      <div className='cursor-pointer px-2 py-8'>
        <img className="w-16 h-16" src="src/assets/techs/react.png" alt="react icon" />
      </div>

      <div className='cursor-pointer px-2 py-8'>
        <img className="w-16 h-16" src="src/assets/techs/ts.png" alt="typescript icon" />
      </div>

      <div className='cursor-pointer px-2 py-8'>
        <img className="w-16 h-16" src="src/assets/techs/tailwind.png" alt="tailwind icon" />
      </div>

      <div className='cursor-pointer px-2 py-8'>
        <img className="w-16 h-16" src="src/assets/techs/material.png" alt="material ui icon" />
      </div>

      <div className='cursor-pointer px-2 py-8'>
        <img className="w-16 h-16" src="src/assets/techs/node.png" alt="node icon" />
      </div>

    </Marquee>
  );
}
