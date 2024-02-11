import styles from "./Card.module.scss";
import ContentLoader from "react-content-loader";
import { useState, useContext } from "react";
import AppContext from "../../context";

export default function Card({
  id,
  title,
  imageUrl,
  price,
  onFavorite,
  onPlus,
  favoried = false,

  loading = false,
}) {
  const { isItemsAdded } = useContext(AppContext);
  const [isFavorite, setIsFavorite] = useState(favoried);
  const obj = { id, parentId: id, title, imageUrl, price };
  const onClickPlus = () => {
    onPlus(obj);
  };
  const onClickFavorite = () => {
    onFavorite(obj);
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={150}
          height={187}
          viewBox="0 0 150 187"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb">
          <rect x="0" y="0" rx="10" ry="10" width="150" height="91" />
          <rect x="0" y="108" rx="5" ry="5" width="150" height="14" />
          <rect x="0" y="126" rx="5" ry="5" width="93" height="17" />
          <rect x="0" y="160" rx="5" ry="5" width="80" height="23" />
          <rect x="118" y="155" rx="5" ry="5" width="30" height="30" />
        </ContentLoader>
      ) : (
        <>
          {onFavorite && (
            <div className={styles.favorite} onClick={onClickFavorite}>
              <img src={isFavorite ? "/icon/like.svg" : "/icon/unliked.svg"} alt="like" />
            </div>
          )}
          <img width={133} height={112} src={imageUrl} alt="" />
          <h5>{title}</h5>
          <div className="d-flex justify-between">
            <div className="d-flex flex-column align-center">
              <span>Цена:</span>
              <b>{price} uan</b>
            </div>

            {onPlus && (
              <img
                className={styles.plus}
                onClick={onClickPlus}
                src={isItemsAdded(id) ? "/icon/done.svg" : "/icon/plus.svg"}
                alt="plus"
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}
