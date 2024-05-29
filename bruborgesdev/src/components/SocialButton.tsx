import React from 'react';

interface SocialButtonProps {
    url: string;
    img: string;
    social: string;
    text: string;
}

export const SocialButton: React.FC<SocialButtonProps> = ({ url, text, social, img }) => {
    return (
        <button className='flex flex-col justify-center items-center'>

            <a className="flex justify-center items-center" href={url} target='_blank'>
                <img src={img} alt='' className='mr-4 w-20 h-20' />
                <div className='text-left'>
                    <p className='text-lg font-bold text-cl-green'>{social}</p>
                    <span className="text-sm font-title text-cl-lavander">{text}</span>
                </div>
            </a>

        </button>
    )
}
