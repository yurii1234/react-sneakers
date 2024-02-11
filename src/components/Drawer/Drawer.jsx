import { useState } from "react";
import Info from "../info";
import axios from "axios";

import { useCart } from "../hooks/useCart";

import styles from "./Drawer.module.scss";
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default function Drawer({ onClose, onRemove, items = [], opened }) {
  const { cartItems, setCartItems, totalPrise } = useCart();
  const [orderId, setOrderId] = useState(null);
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onClickOrder = async () => {
    try {
      const { data } = await axios.post("http://localhost:4000/orders", {
        items: cartItems,
      });

      setIsLoading(true);
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete("https://65b655bada3a3c16ab008ed1.mockapi.io/card/" + item.id);
        await delay(1000);
      }
    } catch (error) {
      alert("Не удалось создать заказ :(");
    }
    setIsLoading(false);
  };
  return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ""}`}>
      <div className={styles.drawer}>
        <h2 className="d-flex justify-between mb-30 ">
          Корзина <img onClick={onClose} key={"123"} className="cu-p" src="/icon/btn-remote.svg" alt="" />
        </h2>

        {items.length > 0 ? (
          <div className="d-flex flex-column flex">
            <div className="items">
              {items.map((obj) => (
                <div key={obj.id} className="cartItem d-flex align-center mb-20">
                  <div style={{ backgroundImage: `url(${obj.imageUrl})` }} className="cardItemImg"></div>
                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} uan</b>
                  </div>
                  <img
                    onClick={() => {
                      onRemove(obj.id);
                    }}
                    className="remoteBtn"
                    src="/icon/btn-remote.svg"
                    alt=""
                  />
                </div>
              ))}
            </div>
            <div className="cardTotalBlock">
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>{totalPrise} uan</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>{Math.round((totalPrise / 100) * 5)} uan</b>
                </li>
              </ul>
              <button disabled={isLoading} onClick={onClickOrder} className="greenButton">
                Оформить заказ <img src="icon/arrow.svg" alt="" srcset="" />
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderComplete ? "Заказ оформлен!" : "Пустая корзина"}
            description={
              isOrderComplete
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : "Добавте хотя бы одну пару кросовок, что бы сделать заказ."
            }
            image={isOrderComplete ? "./images/buy-done.png" : "./images/pusto.png"}
          />
        )}
        <div></div>
      </div>
    </div>
  );
}
