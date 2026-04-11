import React, { Suspense, use } from 'react';
import BookCard from './BookCard';

const bookPromise = fetch("/booksData.json").then(res => res.json());
const AllBooks = () => {
    const books = use(bookPromise);
    return (
        <>
            <h1 className='text-4xl font-bold text-center py-8'>All Books</h1>
            <div className='container grid grid-cols-1 md:grid-cols-3 mx-auto gap-10 py-10'>
                {books.map(book => (
                    <Suspense fallback={<div className='text-5xl text-center'>Loading...</div>} key={book.bookId}>
                        <BookCard book={book}/>
                    </Suspense>
                )
                )}
            </div>
        </>
    );
};

export default AllBooks;