import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import React, { useEffect, useState } from 'react';



export const ArrowUp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-24 right-2">
      {isVisible && (
        <button
          type="button"
          onClick={scrollToTop}
          className="p-1 rounded-full bg-cl-green text-cl-purple hover:bg-cl-lavander transition-all duration-300"
        >
          <KeyboardArrowUpIcon />
        </button>
      )}
    </div>
  );
};
