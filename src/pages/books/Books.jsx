import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext.jsx';

const Books = () => {
    const { storedBooks } = useContext(BookContext);
    return (
        <div>
            <h1>Listed Books</h1>
            <p>Stored Books: {storedBooks.length}</p>
        </div>
    );
};

export default Books;