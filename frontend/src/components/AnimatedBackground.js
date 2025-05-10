import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import waveGrid from "../assets/wave-grid.json";

function AnimatedBackground() {
  const [fadeOut, setFadeOut] = useState(false);
  const [visible, setVisible] = useState(true);
  const lottieRef = useRef(); // 👈 ref to control the animation

  useEffect(() => {
    // Set playback speed to 2x once Lottie is mounted
    if (lottieRef.current) {
      lottieRef.current.setSpeed(2); // 👈 this works!
    }

    const fadeStart = setTimeout(() => setFadeOut(true), 2000); // Show for 2s
    const hideTimer = setTimeout(() => setVisible(false), 5000); // Remove after 5s

    return () => {
      clearTimeout(fadeStart);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`background-overlay ${fadeOut ? "fade-out" : ""}`}>
      <Lottie
        lottieRef={lottieRef}          // 👈 attach the ref
        animationData={waveGrid}
        loop={false}
        className="lottie-zoom"
      />
    </div>
  );
}

export default AnimatedBackground;
