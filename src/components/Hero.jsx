import React from "react";
import "../styles/hero.scss";

export default function Hero({
  children,
  heroContainer,
  heroContent,
  title,
  descrip
}) {
  return (
    <div className={heroContainer}>
      <div className={heroContent}>
        <h1>{title}</h1>
        <p>{descrip}</p>
        {children}
      </div>
    </div>
  );
}

Hero.defaultProps = {
  heroContainer: "mainHero",
  heroContent: "mainHeroContent"
};
