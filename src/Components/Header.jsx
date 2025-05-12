import React, { useEffect, useRef } from 'react';

const Header = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const offsetX = (clientX - centerX) / 25;
      const offsetY = (clientY - centerY) / 25;
      if (textRef.current) {
        textRef.current.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(1.05)`;
      }
    };

    const handleMouseLeave = () => {
      if (textRef.current) {
        textRef.current.style.transform = 'translate(0, 0) scale(1)';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="header">
      <div className="overlay" />
      <div className="animated-text" ref={textRef}>
        BreakfastChap
      </div>
    </div>
  );
};

export default Header;
