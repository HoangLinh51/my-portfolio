import React, { useState, useEffect } from 'react';
import { Player } from "@lottiefiles/react-lottie-player";

export default function LoadingAnim() {
  const [, setComponentsLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setComponentsLoaded(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);
  return (

    <div
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Player
        className="loading-anim-player"
        autoplay
        loop
        src="/lottie/serverboot.json"
        style={{ width: "80%", height: "80%", position: 'relative', }}
      />
      <div className="loading-code-image">
        <Player
          autoplay loop src="/lottie/loadcode.json"
          style={{ width: "80px", height: "80px", }}
        />
      </div>
      <p className='loading-text-resp'>
        Preparing your experience...
      </p>
    </div>
  );
}
