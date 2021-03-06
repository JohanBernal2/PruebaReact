import React from "react";

const StarButton = () => (
  <div className="star-button-container">
    <small>
      Déjanos una estrella en Github si este repositorio te fue útil :)
    </small>
    <a
      className="github-button"
      href="https://github.com/jeffersonRibeiro/react-shopping-cart"
      data-size="large"
      aria-label="Star jeffersonRibeiro/react-shopping-cart on GitHub"
    >
      Estrella
    </a>
  </div>
);

export default StarButton;
