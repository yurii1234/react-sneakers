// import logo from "./logo.svg";
import "./App.css";
import "macro-css";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: "12 999",
    imageUrl: "./images/image1.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    price: "12 999 ",
    imageUrl: "./images/image2.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: "8 499 ",
    imageUrl: "./images/image10.jpg",
  },
  {
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: "8 999 ",
    imageUrl: "./images/image3.jpg",
  },
];
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
          {arr.map((obj) => (
            <Card onClick={() => console.log(obj)} title={obj.title} price={obj.price} imageUrl={obj.imageUrl} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
