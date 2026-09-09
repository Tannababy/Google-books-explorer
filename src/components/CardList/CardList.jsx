import Card from "../Card/Card";

function CardList({ items }) {
  return items.map((item) => {
    return (
      <Card
        // key={item.volumeInfo.id}
        // image={item.volumeInfo.imageLinks.thumbnail}
        // title={item.volumeInfo.title}
        // author={item.volumeInfo.authors.join(", ")}
        // description={item.volumeInfo.description}
      />
    );
  });
}
export default CardList;
