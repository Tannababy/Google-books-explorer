import { useState, useEffect } from "react";
import Card from "../Card/Card";

function CardList() {
  //usestate hook to update state of books cardlist
  const [books, setBooks] = useState([]);

  async function googleAPICall() {
    // response obj returned from fetch from google api call
    const response = await fetch(
      "https://www.googleapis.com/books/v1/volumes?q=flowers&key=yourAPIKEY",
    );

    // response obj parsed to json
    const data = await response.json();
    return data;
  }

  // useeffect hook to call function to call google api
  useEffect(() => {
    async function getBooks() {
      try {
        const data = await googleAPICall();
        setBooks(data.items);
      } catch (error) {
        console.log(error);
      }
    }
    getBooks();
  }, []);

  return books.map((item) => {
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
