import { useContext } from "react";
import Card from "../components/Card";
import AppContext from "../context";

export default function Favorites({}) {
  const { favorites, onAddToFavorite } = useContext(AppContext);
  return (
    <div className="content p-40">
      <h1>Мои закладки</h1>

      <div className="d-flex flex-wrap">
        {favorites.map((item, index) => (
          <Card
            key={index}
            favoried={true}
            onFavorite={onAddToFavorite}
            id={item.id}
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
