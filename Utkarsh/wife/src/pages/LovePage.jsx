import { useEffect, useRef, useState } from "react";
import couple from "../assets/utkarsh2.jpeg";
import memory1 from "../assets/utkarsh1.jpeg";
import memory2 from "../assets/utkarsh3.jpeg";
import memory3 from "../assets/utkarsh4.jpeg";

const message =
  "You are the best thing that ever happened to me. I love you forever ❤️";

export default function LovePage() {
  const audioRef = useRef(null);
  const [typed, setTyped] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [burst, setBurst] = useState(false);

  useEffect(() => {
    audioRef.current.play().catch(() => {});

    let i = 0;
    const typing = setInterval(() => {
      setTyped(message.slice(0, i));
      i++;
      if (i > message.length) clearInterval(typing);
    }, 40);

    return () => clearInterval(typing);
  }, []);

  const handleClick = () => {
    setAccepted(true);
    setBurst(true);
    setTimeout(() => setBurst(false), 1200);
  };

  return (
    <div className="relative min-h-screen romantic-bg flex flex-col items-center justify-center p-6 space-y-10 overflow-hidden">

      <audio ref={audioRef} src="/love-song.mp3" loop />

      {/* blobs */}
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>

      {/* sparkles */}
      {[...Array(8)].map((_, i) => (
        <span
          key={i}
          className="sparkle"
          style={{ left: Math.random() * 100 + "%", bottom: "0px" }}
        >
          ✨
        </span>
      ))}

      {/* floating hearts */}
      {[...Array(15)].map((_, i) => (
        <span
          key={i}
          className="heart"
          style={{
            left: Math.random() * 100 + "%",
            animationDuration: 4 + Math.random() * 6 + "s",
          }}
        >
          ❤️
        </span>
      ))}

      {/* Love Card */}
      <div className="glass-card max-w-md text-center animate-softFadeUp">
        <img src={couple} className="rounded-2xl mb-4 shadow-lg" />

        {!accepted ? (
          <button
            onClick={handleClick}
            className="px-6 py-3 bg-pink-600 text-white rounded-full shadow-lg hover:scale-110 transition"
          >
            Will You Be My Valentine?
          </button>
        ) : (
          <h1 className="text-3xl font-bold text-pink-600 mb-3 animate-heartbeat">
            I Love You ❤️
          </h1>
        )}

        <p className="text-gray-700 min-h-[60px] font-medium">
          {typed}
        </p>
      </div>

      {/* heart burst */}
      {burst &&
        [...Array(12)].map((_, i) => (
          <span key={i} className="burst-heart">💖</span>
        ))}

      {/* MEMORY CARDS */}
      <div className="glass-card w-full max-w-2xl animate-softFadeUp">
        <h2 className="text-2xl font-bold text-white mb-5">
          Our Memories 📸
        </h2>

        <div className="memory-grid">
          <img src={memory1} />
          <img src={memory2} />
          <img src={memory3} />
        </div>
      </div>
    </div>
  );
}
