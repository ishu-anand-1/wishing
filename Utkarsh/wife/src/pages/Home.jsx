import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import teddy from "../assets/teddy.avif";

const noTexts = ["No", "Are you sure?", "Pakka?", "Sochlo 😢"];

export default function Home() {
  const [noIndex, setNoIndex] = useState(0);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  /* Floating hearts */
  const hearts = useMemo(() => {
    return [...Array(18)].map(() => ({
      left: Math.random() * 100,
      duration: 4 + Math.random() * 6,
    }));
  }, []);

  const moveButton = () => {
    const x = Math.random() * 250 - 125;
    const y = Math.random() * 120 - 60;
    setNoPos({ x, y });
  };

  const handleNoClick = () => {
    moveButton();
    if (noIndex < noTexts.length - 1) {
      setNoIndex((prev) => prev + 1);
    }
  };

  const handleYesClick = () => {
    setLoading(true);

    setTimeout(() => {
      navigate("/love");
    }, 500);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center romantic-bg overflow-hidden p-6">

      {/* Floating hearts */}
      {hearts.map((h, i) => (
        <span
          key={i}
          className="heart"
          style={{
            left: `${h.left}%`,
            animationDuration: `${h.duration}s`,
          }}
        >
          ❤️
        </span>
      ))}

      {!loading && (
        <>
          {/* Teddy */}
          <img
            src={teddy}
            className="w-40 sm:w-56 mb-6 animate-float drop-shadow-2xl"
          />

          {/* Title */}
          <h1 className="text-3xl sm:text-5xl font-bold text-pink-700 mb-10 text-center animate-pulse">
            Will You Be My Valentine? 💖
          </h1>

          {/* Buttons */}
          <div className="flex gap-4 relative items-center justify-center">
            <button
              onClick={handleYesClick}
              className="px-7 sm:px-10 py-3 bg-pink-600 text-white rounded-full shadow-xl hover:scale-125 transition-all duration-300 animate-glow"
            >
              Yes 💘
            </button>

            <button
              onClick={handleNoClick}
              style={{
                transform: `translate(${noPos.x}px, ${noPos.y}px)`,
              }}
              className="px-6 py-3 bg-white rounded-full shadow-lg transition-all duration-300"
            >
              {noTexts[noIndex]}
            </button>
          </div>
        </>
      )}

      {/* HEART LOADER */}
      {loading && (
        <div className="flex flex-col items-center">
          <div className="heart-loader">❤️</div>
          <p className="text-white mt-4 text-lg">
            Opening love page...
          </p>
        </div>
      )}
    </div>
  );
}
