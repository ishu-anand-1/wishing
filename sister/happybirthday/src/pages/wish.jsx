import sisterImg from "../assets/sister.jpg";
import togetherImg from "../assets/together.jpg";

export default function Wish() {
  return (
    <div className="container wishScreen">
      <div className="card">
        <h1 className="title">Happy Birthday Sister 🎂</h1>

        <div className="photos">
          <img src={sisterImg} alt="Sister" />
          <img src={togetherImg} alt="Together" />
        </div>

        <p className="message">
          Wishing you a day filled with happiness, laughter,
          and endless joy. You are my best friend, my support,
          and the most amazing sister in the world ❤️
        </p>
      </div>
    </div>
  );
}
