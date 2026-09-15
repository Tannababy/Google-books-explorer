import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import SearchForm from "./components/Form/Form";
import CardList from "./components/CardList/CardList";

function App() {
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
      const data = await googleAPICall();
      setBooks(data.items);
    }
    getBooks();
  }, []);

  return (
    <>
      <Header />
      <SearchForm />
      <CardList items={books} />
    </>
  );
}

export default App;
