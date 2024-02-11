import { Link } from "react-router-dom";
import { useCart } from "./hooks/useCart";

export default function Header(props) {
  const { totalPrise } = useCart();

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img alt="logo" width={40} height={40} src="/images/logo.png" />
          <div className="headerInfo">
            <h3 className="text-uppercase">REACT SNEAKERS</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img src="/icon/Group.svg" alt="buy" srcset="" />
          <span>{totalPrise} uan</span>
        </li>
        <li className="mr-30 cu-p">
          <Link to="/favorites">
            <img src="/icon/like-top.svg" alt="like" srcset="" />
          </Link>
          <span>Закладки</span>
        </li>
        <li className="cu-p">
          <Link to="/orders">
            <img src="/icon/user.svg" alt="user" srcset="" />
          </Link>
          <span>Профиль</span>
        </li>
      </ul>
    </header>
  );
}
