import Card from "../Card/Card";

function CardList({ items }) {
  console.log(items);

  return items.map((item) => {
    return (
      <Card
        key={item.id}
        image={item.volumeInfo.imageLinks?.thumbnail}
        title={item.volumeInfo.title}
        author={item.volumeInfo.authors}
        description={item.volumeInfo.description}
      />
    );
  });
}
export default CardList;
