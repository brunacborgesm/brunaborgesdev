import React from 'react'

interface CustomButtonProps {
    text: string;
    url: string;
    icon?: React.ReactNode;
}

export const DefaultButton: React.FC<CustomButtonProps> =({ text, url, icon }) => {
  return (
    <button className="border border-cl-green rounded-full py-2 px-4 hover:bg-cl-green hover:text-cl-purple-2 hover:ease-in hover:duration-300">
        <a className='items-center flex gap-1' href={ url } target='_blank'>
          { icon && icon }
          { text } 
        </a>
    </button>
  );
};
