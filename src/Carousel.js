import React, { useState } from "react";
import "./Carousel.css";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import Card from "./Card";

function Carousel(props) {
  const [cardIdx, setCardIdx] = useState(0);
  const card = props.cardData[cardIdx];
  const total = props.cardData.length;
  const leftIconHidden = cardIdx === 0 ? "hidden" : "";
  const rightIconHidden = cardIdx === total - 1 ? "hidden" : "";
  const goForward = () => setCardIdx(cardIdx + 1);
  const goBack = () => setCardIdx(cardIdx - 1);

  return (
    <div className="Carousel">
      <h1>{props.title}</h1>
      <div className="Carousel-main">
        <i
          className={`fas fa-chevron-circle-left fa-2x ${leftIconHidden}`}
          onClick={goBack}
          data-testid="left-arrow"
        />
        <Card
          title={card.title}
          description={card.description}
          url={card.url}
          src={card.src}
          currNum={cardIdx + 1}
          totalNum={total}
        />
        <i
          className={`fas fa-chevron-circle-right fa-2x ${rightIconHidden}`}
          onClick={goForward}
          data-testid="right-arrow"
        />
      </div>
    </div>
  );
}

Carousel.defaultProps = {
  cardData: [
    {
      src: image1,
      title: "Credit Card Finder Web App built with Flask and PostgreSQL.",
      description: "Compare more than 350 credit cards and find the card that maximizes the rewards dollar value of your everyday spending habits.",
      url: "https://cc-finder.herokuapp.com/"
    },
    {
      src: image2,
      title: "Credit Card & Bank Web API built with Node.js/Express and PostgreSQL.",
      description: "A free, server-side web API supplying credit card and bank data.",
      url: "https://ccdeck-api.herokuapp.com/"
    }
  ],
  title: "Portfolio Projects:"
};

export default Carousel;
