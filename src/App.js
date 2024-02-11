import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import Drawer from "./components/Drawer/Drawer";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";
import "./App.css";
import "macro-css";
import AppContext from "./context";

export default function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [shearchValue, setSearchValue] = useState("");
  const [cardOpened, setCardOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [cartResponse, favoritesResponse, itemsResponse] = await Promise.all([
          axios.get("https://65b655bada3a3c16ab008ed1.mockapi.io/card"),
          axios.get("http://localhost:4000/favorites"),
          axios.get("https://65b655bada3a3c16ab008ed1.mockapi.io/items"),
        ]);

        setIsLoading(false);
        setCartItems(cartResponse.data);
        setFavorites(favoritesResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        alert("Ошибка при запросе данных :(");
      }
    }
    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id));
      if (findItem) {
        setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
        await axios.delete(`https://65b655bada3a3c16ab008ed1.mockapi.io/card/${findItem.id}`);
      } else {
        // setCartItems([...cartItems, obj]);
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post("https://65b655bada3a3c16ab008ed1.mockapi.io/card", obj);
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          })
        );
      }
    } catch (error) {
      alert("Не удалось добавить товар в корзину");
      console.log(error);
    }
  };

  const onRemoveItem = (id) => {
    try {
      axios.delete(`https://65b655bada3a3c16ab008ed1.mockapi.io/card/${id}`);
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
    } catch (error) {
      alert("Ошибка при удалении из корзины");
    }
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`http://localhost:4000/favorites/${obj.id}`);
        setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
      } else {
        const { data } = await axios.post("http://localhost:4000/favorites", obj);
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Не удалось добавить в фавориты");
    }
  };
  const onCangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const isItemsAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };
  return (
    <AppContext.Provider
      value={{ items, cartItems, favorites, isItemsAdded, onAddToFavorite, onAddToCart, setCardOpened, setCartItems }}>
      <div className="wrapper clear">
        <Drawer items={cartItems} onClose={() => setCardOpened(false)} onRemove={onRemoveItem} opened={cardOpened} />
        <Header onClickCart={() => setCardOpened(true)} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                items={items}
                cartItems={cartItems}
                onAddToFavorite={onAddToFavorite}
                shearchValue={shearchValue}
                setSearchValue={setSearchValue}
                onCangeSearchInput={onCangeSearchInput}
                onAddToCart={onAddToCart}
                isLoading={isLoading}
              />
            }
            exact></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
          <Route path="/orders" element={<Orders />}></Route>
        </Routes>
      </div>
    </AppContext.Provider>
  );
}
