import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import SearchForm from "./components/Form/Form";
import CardList from "./components/CardList/CardList";

function App() {
  return (
    <>
      <Header />
      <SearchForm />
      <CardList />
    </>
  );
}

export default App;
