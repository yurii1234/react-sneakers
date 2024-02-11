import Card from "../components/Card";

export default function Home({
  items,
  onAddToFavorite,
  shearchValue,
  setSearchValue,
  onCangeSearchInput,
  onAddToCart,

  isLoading,
}) {
  const renderItems = () => {
    const filtredItems = items.filter((item) => item.title.toLowerCase().includes(shearchValue.toLowerCase()));
    return (isLoading ? [...Array(12)] : filtredItems).map((item, index) => (
      <Card
        key={index}
        onFavorite={(obj) => onAddToFavorite(obj)}
        onPlus={(obj) => onAddToCart(obj)}
        loading={isLoading}
        {...item}
      />
    ));
  };
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>{shearchValue ? `Поиск по запросу:'${shearchValue}'` : "Все кроссовки"}</h1>
        <div className="search-block d-flex">
          <img src="icon/search.svg" alt="Search" />
          {shearchValue && (
            <img onClick={() => setSearchValue("")} className="clear cu-p" src="/icon/btn-remote.svg" alt="clear" />
          )}
          <input onChange={onCangeSearchInput} value={shearchValue} placeholder="Поиск..." type="text" />
        </div>
      </div>

      <div className="d-flex flex-wrap">{renderItems()}</div>
    </div>
  );
}
