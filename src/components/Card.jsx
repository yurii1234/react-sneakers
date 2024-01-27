export default function Card() {
  return (
    <div className="card ">
      <div className="favorite">
        <img src="/icon/unliked.svg" alt="" srcset="" />
      </div>
      <img width={133} height={112} src="/images/image1.jpg" alt="" srcset="" />
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="d-flex justify-between">
        <div className="d-flex flex-column align-center">
          <span>Цена:</span>
          <b>12999 uan</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="/icon/plus.svg" alt="" />
        </button>
      </div>
    </div>
  );
}
