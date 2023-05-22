/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Book from "./Book";
import LoadingSpinner from "./LoadingSpinner";

const Books = () => {
  const navigation = useNavigation();
  console.log(navigation.state);
  if (navigation.state === "loading") {
    return <LoadingSpinner></LoadingSpinner>;
  }
  const { books } = useLoaderData();

  return (
    <div className="my-container">
      <div className="grid gap-6 mb-8 lg:grid-cols-4 sm:grid-cols-2">
        {books.map((book) => (
          <Book book={book} key={book.isbn13} />
        ))}
      </div>
    </div>
  );
};

export default Books;
