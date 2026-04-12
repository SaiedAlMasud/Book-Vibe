import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';
export const BookContext = createContext();
const BookProvider = ({ children }) => {
    const [storedBooks, setStoredBooks] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    
    const handleMArkAsRead = (currentBook) => {
        const isExisstInStored = storedBooks.find((b) => b.bookId === currentBook.bookId);
        if (isExisstInStored) {            
            toast.error("Book already marked as read!");
            return;
        }
        const isExisstInWishlist = wishlist.find((b) => b.bookId === currentBook.bookId);
        if (isExisstInWishlist) {
            setWishlist(wishlist.filter((b) => b.bookId !== currentBook.bookId));
            //setStoredBooks([...storedBooks, currentBook]);
            toast.info("Book removed from wishlist and added to read list!");
        }
        setStoredBooks([...storedBooks, currentBook]);
        toast.success("Book marked as read!");
    };

    const handleWishList = (currentBook) => {
        const isExisstInWishlist = wishlist.find((b) => b.bookId === currentBook.bookId);
        const isExisstInStored = storedBooks.find((b) => b.bookId === currentBook.bookId);
        if (isExisstInWishlist) {
            toast.error("Book already in wishlist!");
            return;
        } else if (isExisstInStored) {
            toast.error("Book is already marked as read!");
            return;
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