import React from "react";
import styles from "./Card.module.css";
export const JokeCard = ({add , rmv, joke, smile,vote}) => {
  return (
    <div className={styles.card}>
      <div className={styles.likeBox}>
        <button onClick={rmv} >-</button>
        <span>{vote}</span>
        <button onClick={add}>+</button>
      </div>
      <p className={styles.joke}>{joke}</p>
      <div className={styles.smile}>{smile}</div>
    </div>
  );
};
