import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setOpened(true);

    // small delay before fade
    setTimeout(() => setFadeOut(true), 500);

    // navigate after animation
    setTimeout(() => navigate("/wish"), 1000);
  };

  const hearts = ["❤️", "💖", "💕", "💗", "💝"];

  return (
    <div className={`container center ${fadeOut ? "fade-out" : ""}`}>
      {!opened ? (
        <button className="btn surpriseBtn" onClick={handleClick}>
          Click for Surprise 🎁
        </button>
      ) : (
        <div className="giftAppear">🎁</div>
      )}

      {/* floating hearts */}
      {hearts.map((heart, index) => (
        <div
          key={index}
          className="heart"
          style={{
            left: `${15 + index * 15}%`,
            animationDelay: `${index * 1.2}s`,
          }}
        >
          {heart}
        </div>
      ))}
    </div>
  );
}
