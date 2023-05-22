import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  return (
    <Link to={`../books/${book.isbn13}`}>
      <div className="overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl">
        <img
          src={book.image}
          alt="book cover"
          className="object-cover w-full h-56 md:h-64 xl:h-80"
        />
        <div className="bg-black bg-opacity-75 text-white absolute opacity-0 hover:opacity-100 inset-0 transition-opacity duration-200 px-6 py-4 flex flex-col">
          <p className="mb-5 text-blue-400 font-semibold">{book.title}</p>
          <p>{book.subtitle.substring(0, 45)}...</p>
          <br />
          <p className="mt-auto">{book.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Book;
