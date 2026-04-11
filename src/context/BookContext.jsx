import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';
export const BookContext = createContext();
const BookProvider = ({ children }) => {
    const [storedBooks, setStoredBooks] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    
    const handleMArkAsRead = (currentBook) => {
        const isExisst = storedBooks.find((b) => b.bookId === currentBook.bookId);
        if (isExisst) {            
            toast.error("Book already marked as read!");
        } else {
            setStoredBooks([...storedBooks, currentBook]);
            toast.success("Book marked as read!");
        }
    };

    const handleWishList = (currentBook) => {
        const isExisst = storedBooks.find((b) => b.bookId === currentBook.bookId);
        if (isExisst) {            
            toast.error("Book already marked as read!");
        } else {
            setWishlist([...wishlist, currentBook]);
            toast.success("Book added to wishlist!");
        }
    };

    const data ={
        storedBooks,
        setStoredBooks,
        handleMArkAsRead,
        wishlist,
        setWishlist,
        handleWishList
    }
    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
};

export default BookProvider;