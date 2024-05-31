import Marquee from 'react-fast-marquee';

export const TechSlider = () => {
  return (
    <Marquee className='bg-transparent m-1 p-14 border-t border-t-cl-lavander border-b border-b-cl-lavander'>
      <div className='mx-6'>
        <img className="w-20 h-20" src="src/assets/techs/html.png" alt="html icon" />
      </div>

      <div className='mx-6'>
        <img className="w-20 h-20" src="src/assets/techs/css.png" alt="css icon" />
      </div>

      <div className='mx-6'>
        <img className="w-20 h-20" src="src/assets/techs/js.png" alt="javascript icon" />
      </div>

      <div className='mx-6'>
        <img className="w-20 h-20" src="src/assets/techs/react.png" alt="react icon" />
      </div>

      <div className='mx-6'>
        <img className="w-20 h-20" src="src/assets/techs/ts.png" alt="typescript icon" />
      </div>

      <div className='mx-6'>
        <img className="w-24 h-20" src="src/assets/techs/tailwind.png" alt="tailwind icon" />
      </div>

      <div className='mx-6'>
        <img className="w-20 h-20" src="src/assets/techs/material.png" alt="material ui icon" />
      </div>

      <div className='mx-6'>
        <img className="w-20 h-20" src="src/assets/techs/node.png" alt="node icon" />
      </div>

    </Marquee>
  );
}
