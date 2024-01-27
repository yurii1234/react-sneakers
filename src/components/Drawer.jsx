export default function Drawer() {
  return (
    <div className="overlay" style={{ display: "none" }}>
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30 ">
          Корзина <img className="remoteBtn cu-p" src="/icon/btn-remote.svg" alt="" srcset="" />
        </h2>
        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <div style={{ backgroundImage: "url(/images/image1.jpg)" }} className="cardItemImg"></div>
            {/* <img className="mr-20" width={70} height={70} src="/images/image1.jpg" alt="sneakers" srcset="" /> */}
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 uan</b>
            </div>
            <img className="remoteBtn" src="/icon/btn-remote.svg" alt="" srcset="" />
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <div style={{ backgroundImage: "url(/images/image1.jpg)" }} className="cardItemImg"></div>
            {/* <img className="mr-20" width={70} height={70} src="/images/image1.jpg" alt="sneakers" srcset="" /> */}
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 uan</b>
            </div>
            <img className="remoteBtn" src="/icon/btn-remote.svg" alt="" srcset="" />
          </div>
        </div>
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
  );
}
