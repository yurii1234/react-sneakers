export default function Drawer({ onClose, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30 ">
          Корзина <img onClick={onClose} className="remoteBtn cu-p" src="/icon/btn-remote.svg" alt="" srcset="" />
        </h2>
        <div className="items">
          {items.map((obj) => (
            <div className="cartItem d-flex align-center mb-20">
              <div style={{ backgroundImage: `url(${obj.imageUrl})` }} className="cardItemImg"></div>
              <div className="mr-20 flex">
                <p className="mb-5">{obj.title}</p>
                <b>{obj.price} uan</b>
              </div>
              <img className="remoteBtn" src="/icon/btn-remote.svg" alt="" srcset="" />
            </div>
          ))}

          <div className="cardTotalBlock">
            <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <b>21 498 uan</b>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 uan</b>
              </li>
            </ul>
            <button className="greenButton">
              Оформить заказ <img src="icon/arrow.svg" alt="" srcset="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
