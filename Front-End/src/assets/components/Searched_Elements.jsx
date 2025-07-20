const Searched_Elements = ({ item }) => {
  return (
    <>
      <div className="child-search-data">
        <img
          className="search-small-img"
          src={item.image}
          alt="No-Image"
          style={{ borderRadius: "1.3rem" }}
        />
        <div className="data-info-search">
          <h5 className="search-item-name">{item.name}</h5>
          <p className="search-cuisine">{item.cuisine}</p>
        </div>
      </div>
    </>
  );
};
export default Searched_Elements;
