import React from 'react';


const ReadBooksCard = ({ book }) => {
    return (
        <div>
            <div className='flex flex-col gap-10 md:flex-row md:gap-8 border border-gray-300 rounded-xl p-5'>
                <div>
                    <figure className='bg-base-300 rounded-2xl p-8'>
                        <img src={book.image} alt={book.title} />
                    </figure>
                </div>
                <div>
                    <h3 className='text-2xl font-bold'>{book.bookName}</h3>
                    <p className='text-[16px] text-gray-500'>By: {book.author}</p>
                    <div className='my-4'>
                        <span className="badge py-1 px-2 bg-base-200 font-semibold mr-5 rounded-2xl">Tags</span>
                        {book.tags.map((tag, index) => (
                            <span key={index} className="badge py-1 px-2 bg-green-50 text-green-500 font-semibold mr-5 rounded-2xl">
                                {tag}
                            </span>
                            
                        ))}
                        <span className="badge mr-5">
                            Year of Publication: {book.yearOfPublishing}
                        </span>
                    </div>
                    <div className='space-x-4 text-[16px] text-gray-500'>
                        <span>Publisher: {book.publisher}</span>
                        <span>Page: {book.totalPages}</span>
                    </div>
                    <div className='divider my-0'></div>
                </div>
            </div>
        </div>
    );
};

export default ReadBooksCard;