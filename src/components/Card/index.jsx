import React from "react";
import styles from "./Card.module.scss";

export default function Card({ title, imageUrl, price, onClickFavorite, onPlus }) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    onPlus({ title, imageUrl, price });
    setIsAdded(!isAdded);
  };

  React.useEffect(() => {}, [isAdded]);
  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>
        <img src="/icon/unliked.svg" alt="" srcset="" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="" srcset="" />
      <h5>{title}</h5>
      <div className="d-flex justify-between">
        <div className="d-flex flex-column align-center">
          <span>Цена:</span>
          <b>{price} uan</b>
        </div>

        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdded ? "/icon/done.svg" : "/icon/plus.svg"}
          alt="plus"
        />
      </div>
    </div>
  );
}
