import styles from "./Card.module.scss";

export default function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/icon/unliked.svg" alt="" srcset="" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="" srcset="" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between">
        <div className="d-flex flex-column align-center">
          <span>Цена:</span>
          <b>{props.price} uan</b>
        </div>
        <button onClick={props.onClick} className="button">
          <img src="/icon/plus.svg" alt="" />
        </button>
      </div>
    </div>
  );
}
