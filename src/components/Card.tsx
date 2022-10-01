import React, { useEffect, useState } from "react";
import "./Card.css";

const URL = "https://api.adviceslip.com/advice";

const Card = () => {
  const [draw, setDraw] = useState(false);
  const [apiResult, setApiResult] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const fetchAdvice = await fetch(URL);
      const response = await fetchAdvice.json();
      setApiResult(await response.slip);
    };

    if (draw) {
      fetchData();
      setDraw(false);
    }
  }, [draw, setApiResult, setDraw]);

  const { id, advice } = apiResult ?? {
    id: "",
    advice: "",
  };

  return (
    <div className="container">
      <div className="card">
        <h1>ADVICE #{id}</h1>
        {advice === "" && <p>Get a quote clicking dice</p>}
        {advice !== "" && <p>"{advice}"</p>}
        <div className="spacing">
          <span></span>
          <span className="coin">🪙</span>
          <span></span>
        </div>
        <button onClick={() => setDraw(true)}></button>
      </div>
    </div>
  );
};

export default Card;
