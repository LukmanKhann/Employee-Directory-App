import axios from "axios";
import { useEffect, useState } from "react";
import style from "./quote.module.css";
const Quote = () => {
  const [quote, setQuote] = useState("");

  // taking async for promise request for each time it will await until it get some respose or give error
  const fetchquote = async () => {
    try {
      const response = await axios.get("https://api.quotable.io/random");
      setQuote(response.data.content);
    } catch (error) {
      console.error("Error While Fetching The Data", error);
    }
    // To manage the rendering behavior without this it will work continuesly
    useEffect =
      (() => {
        fetchquote();
      },
      []);
  };
  return (
    <div id={style.mainquote}>
      
      <div id={style.quotebox1}>
        <h2>Quote Generator</h2>
        <div id={style.quote}>
          <h2>{quote}</h2>
        </div>
        <button onClick={fetchquote}>Generate Quote</button>
      </div>
    </div>
  );
};

export default Quote;
