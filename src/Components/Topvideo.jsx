import React, { useState, useEffect } from 'react';


const Topvideo = () => {
  const [showVideo, setShowVideo] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setShowVideo(false);
      } else {
        setShowVideo(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className='row align-items-center ms-1'>
      {/* Text Content - Collapses with video */}
      <div className={`col-12 col-md-4 mb-4 text-block ${showVideo ? "show" : "hide"}`}>
        <h1 className='mt-3'>Welcome TO <span className='break'>Breakfast</span><span className="chap">Chap</span></h1>
        <h3 className='text-start'>Your one-stop destination for a delicious breakfast</h3>
        <h3 className='text-start'>We serve the best breakfast in town</h3>
        <h3 className='text-start'>Order now and enjoy a delightful morning</h3>
      </div>

      {/* Video Banner */}
      <div className={`video-banner col-12 p-1 col-md-8 ${showVideo ? "show" : "hide"}`}>
        <video autoPlay muted loop className="video-content">
          <source src="videos/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Topvideo;
