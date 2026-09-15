function Card(props) {
  return (
    <section>
      <p>Title: {props.title}</p>
      <img src={props.image} alt={props.title + " image"} />
      <p>Author: {props.author ?? " not provided"}</p>
      <p>Description: {props.description ?? " not provided"}</p>
      <hr />
    </section>
  );
}
export default Card;
