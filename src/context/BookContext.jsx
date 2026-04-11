import React, { createContext, useState } from 'react';
export const BookContext = createContext();
const BookProvider = ({ children }) => {
    const [storedBooks, setStoredBooks] = useState([]);
    const handleMArkAsRead = (currentBook) => {
        const isExisst = storedBooks.find((b) => b.bookId === currentBook.bookId);
        if (isExisst) {            
            alert("You have already marked this book as read.");
        } else {
            setStoredBooks([...storedBooks, currentBook]);
            alert("Book marked as read!");
        }
    };
    const data ={
        storedBooks,
        setStoredBooks,
        handleMArkAsRead
    }
    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
};

export default BookProvider;