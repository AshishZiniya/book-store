import React, { useContext, useState } from "react";
import { GlobalContext } from "./GlobalProvider";

function BookSearch() {
  const { books, setBooks } = useContext(GlobalContext);
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setQuery(inputValue);
    const filteredBooks = books.filter((book) => {
      const title = book.title.toString().toLowerCase();
      const authors = book.authors.toString().toLowerCase();
      return title.includes(inputValue.toLowerCase()) || authors.includes(inputValue.toLowerCase());
    });
    setBooks(filteredBooks);
  };

  return (
    <div id="search" className="container d-flex flex-wrap justify-content-center my-4">
      <a href="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
        <span className="fs-4">List of All Books</span>
      </a>
      <div className="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
        <input
          type="search"
          className="form-control"
          placeholder="Search..."
          aria-label="Search"
          value={query}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}

export default BookSearch;
