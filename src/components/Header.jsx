export default function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} src="/images/logo.png" />
        <div className="headerInfo">
          <h3 className="text-uppercase">REACT SNEAKERS</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img src="/icon/Group.svg" alt="" srcset="" />
          <span>1200 uan</span>
        </li>
        <li className="mr-30 cu-p">
          <img src="/icon/like-top.svg" alt="" srcset="" />
          <span>Закладки</span>
        </li>
        <li className="cu-p">
          <img src="/icon/user.svg" alt="" srcset="" />
          <span>Профиль</span>
        </li>
      </ul>
    </header>
  );
}
