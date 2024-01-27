// import logo from "./logo.svg";
import "./App.css";
import "macro-css";

function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/images/logo.png" />
          <div className="headerInfo">
            <h3 className="text-uppercase">REACT SNEAKERS</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img src="/icon/Group.svg" alt="" srcset="" />
            <span>1200 uan</span>
          </li>
          <li>
            <img src="/icon/like.svg" alt="" srcset="" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">Все кроссовки</h1>
        <div className="d-flex">
          <div className="card ">
            <img width={133} height={112} src="/images/image1.jpg" alt="" srcset="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between">
              <div className="d-flex flex-column align-center">
                <span>Цена:</span>
                <b>12999 uan</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/images/plus.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="card ">
            <img width={133} height={112} src="/images/image2.jpg" alt="" srcset="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between">
              <div className="d-flex flex-column align-center">
                <span>Цена:</span>
                <b>12999 uan</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/images/plus.svg" alt="" />
              </button>
            </div>
          </div>{" "}
          <div className="card ">
            <img width={133} height={112} src="/images/image3.jpg" alt="" srcset="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between">
              <div className="d-flex flex-column align-center">
                <span>Цена:</span>
                <b>12999 uan</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/images/plus.svg" alt="" />
              </button>
            </div>
          </div>{" "}
          <div className="card ">
            <img width={133} height={112} src="/images/image4.jpg" alt="" srcset="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between">
              <div className="d-flex flex-column align-center">
                <span>Цена:</span>
                <b>12999 uan</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/images/plus.svg" alt="" />
              </button>
            </div>
          </div>{" "}
          <div className="card ">
            <img width={133} height={112} src="/images/image5.jpg" alt="" srcset="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between">
              <div className="d-flex flex-column align-center">
                <span>Цена:</span>
                <b>12999 uan</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/images/plus.svg" alt="" />
              </button>
            </div>
          </div>{" "}
          <div className="card ">
            <img width={133} height={112} src="/images/image6.jpg" alt="" srcset="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between">
              <div className="d-flex flex-column align-center">
                <span>Цена:</span>
                <b>12999 uan</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/images/plus.svg" alt="" />
              </button>
            </div>
          </div>{" "}
          <div className="card ">
            <img width={133} height={112} src="/images/image7.jpg" alt="" srcset="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between">
              <div className="d-flex flex-column align-center">
                <span>Цена:</span>
                <b>12999 uan</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/images/plus.svg" alt="" />
              </button>
            </div>
          </div>{" "}
          <div className="card ">
            <img width={133} height={112} src="/images/image8.png" alt="" srcset="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between">
              <div className="d-flex flex-column align-center">
                <span>Цена:</span>
                <b>12999 uan</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/images/plus.svg" alt="" />
              </button>
            </div>
          </div>{" "}
          <div className="card ">
            <img width={133} height={112} src="/images/image9.png" alt="" srcset="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between">
              <div className="d-flex flex-column align-center">
                <span>Цена:</span>
                <b>12999 uan</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/images/plus.svg" alt="" />
              </button>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default App;
