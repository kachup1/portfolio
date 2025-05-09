import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import waveGrid from "../assets/wave-grid.json";

function AnimatedBackground() {
  const [fadeOut, setFadeOut] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const fadeStart = setTimeout(() => setFadeOut(true), 1000); // Start fading at 2s
    const hideTimer = setTimeout(() => setVisible(false), 7000); // Fully gone at 5s

    return () => {
      clearTimeout(fadeStart);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`background-overlay ${fadeOut ? "fade-out" : ""}`}>
      <Lottie animationData={waveGrid} loop={false} />
    </div>
  );
}

export default AnimatedBackground;
