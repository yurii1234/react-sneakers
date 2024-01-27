// import logo from "./logo.svg";
import "./App.css";
import "macro-css";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="icon/search.svg" alt="Search" />
            <input placeholder="Поиск..." type="text" />
          </div>
        </div>

        <div className="d-flex">
          <Card />
          <div className="card ">
            <div className="favorite">
              <img src="/icon/unliked.svg" alt="" srcset="" />
            </div>
            <img width={133} height={112} src="/images/image2.jpg" alt="" srcset="" />
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
          </div>{" "}
          <div className="card ">
            <div className="favorite">
              <img src="/icon/unliked.svg" alt="" srcset="" />
            </div>
            <img width={133} height={112} src="/images/image3.jpg" alt="" srcset="" />
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
          </div>{" "}
          <div className="card ">
            <div className="favorite">
              <img src="/icon/unliked.svg" alt="" srcset="" />
            </div>
            <img width={133} height={112} src="/images/image4.jpg" alt="" srcset="" />
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
          </div>{" "}
          {/* <div className="card ">
            <div className="favorite">
              <img src="/icon/unliked.svg" alt="" srcset="" />
            </div>
            <img width={133} height={112} src="/images/image5.jpg" alt="" srcset="" />
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
          </div>{" "}
          <div className="card ">
            <div className="favorite">
              <img src="/icon/unliked.svg" alt="" srcset="" />
            </div>
            <img width={133} height={112} src="/images/image6.jpg" alt="" srcset="" />
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
          </div>{" "}
          <div className="card ">
            <div className="favorite">
              <img src="/icon/unliked.svg" alt="" srcset="" />
            </div>
            <img width={133} height={112} src="/images/image7.jpg" alt="" srcset="" />
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
          </div>{" "}
          <div className="card ">
            <div className="favorite">
              <img src="/icon/unliked.svg" alt="" srcset="" />
            </div>
            <img width={133} height={112} src="/images/image8.png" alt="" srcset="" />
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
          </div>{" "}
          <div className="card ">
            <div className="favorite">
              <img src="/icon/unliked.svg" alt="" srcset="" />
            </div>
            <img width={133} height={112} src="/images/image9.png" alt="" srcset="" />
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
          </div>{" "} */}
        </div>
      </div>
    </div>
  );
}

export default App;
