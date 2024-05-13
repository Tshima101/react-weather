import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <h1 className="heading1">Weather App</h1>
      <Weather />
      <footer>
        <p>
          This project was coded by
          <a href="https://github.com/Tshima101" target="_blank">
            Tshimangadzo Lambani
          </a>{" "}
          and is on
          <a href="https://github.com/Tshima101/" target="_blank">
            Github
          </a>{" "}
          and hosted on
          <a href="https://.netlify.app/" target="_blank">
            Netlify
          </a>
        </p>
      </footer>
    </div>
  );
}
