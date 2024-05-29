import React from 'react'

interface CustonButtonProps {
    text: string;
    url: string;
    icon?: React.ReactNode;
}

export const DefaultButton: React.FC<CustonButtonProps> =({ text, url, icon }) => {
  return (
    <button className="border border-cl-green rounded-full py-3 px-6 hover:bg-cl-green hover:text-cl-purple-2 hover:ease-in hover:duration-300">
        <a href={ url }>
          { icon && icon }
          { text }
        </a>
    </button>
  );
};
