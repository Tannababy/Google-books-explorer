function Card(props) {
  return (
    <section>
      <img src={props.image} alt={props.title + " image"} />
      <p>Title: {props.title}</p>
      <p>Author: {props.author}</p>
      <p>Description: {props.description}</p>
    </section>
  );
}
export default Card;
