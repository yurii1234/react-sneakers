import { useContext } from "react";
import AppContext from "../context";

const Info = ({ title, image, description }) => {
  const { setCardOpened } = useContext(AppContext);
  return (
    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
      <img src={image} width="120px" alt="cart" className="mb-20" />
      <h2>{title}</h2>
      <p className="opacity-6">{description}</p>
      <button onClick={() => setCardOpened(false)} className="greenButton">
        <img src="icon/arrow.svg" alt="arrow" />
        Вернуться назад
      </button>
    </div>
  );
};

export default Info;
