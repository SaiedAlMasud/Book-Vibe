import React from 'react';
import { Link } from 'react-router';

const BookCard = ({ book }) => {
    return (
        <Link to={`/bookDetails/${book.bookId}`} className="card p-5 shadow-sm border border-gray-200 space-y-4" key={book.bookId}>
            <figure className='bg-base-300 h-80 p-5 rounded-2xl'>
                <img
                    src={book.image}
                    alt="Shoes" />
            </figure>
            <div className='pt-3'>
                {book.tags.map((tag, index) => (
                    <span key={index} className="badge py-4 bg-green-50 text-green-500 font-semibold mr-5 rounded-2xl">
                        {tag}
                    </span>
                ))}
            </div>
            <div className="space-y-3">
                <h2 className="card-title text-2xl">
                    {book.bookName}
                </h2>
                <p className='font-semibold text-gray-500'>By: {book.author}</p>
                <div className='divider'></div>
                <div className="flex justify-between">
                    <p className='font-semibold text-lg text-gray-500'>{book.category}</p>
                    <p className='font-semibold text-lg text-gray-500'>{book.rating}⭐</p>
                </div>
            </div>
        </Link>
    );
};

export default BookCard;