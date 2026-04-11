import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../context/BookContext.jsx';

const BookDetails = () => {
    const { id } = useParams();
    const book = useLoaderData();
    //console.log(book);
    const { handleMArkAsRead, storedBooks } = useContext(BookContext);
    console.log(storedBooks);
    return (
        <div>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 bg-base-100 container mx-auto my-10">
                <figure className='flex items-center justify-center bg-base-300 h-full p-5 rounded-2xl my-auto sm:mx-5'>
                    <img
                        className='w-[50%] h-[60%]'
                        src={book.image}
                        alt={`Book: ${book.bookName} BookID: ${id}`} />
                </figure>
                <div className="card-body">
                    <div className='space-y-4'>
                        <h2 className="card-title text-3xl font-bold">{book.bookName}</h2>
                        <p className='text-[17px] font-semibold text-gray-500'>By: {book.author}</p>
                    </div>
                    <div className='divider my-0'></div>
                    <p className='text-[17px] font-semibold text-gray-500'>{book.category}</p>
                    <div className='divider my-0'></div>
                    <div>
                        <span className='font-bold text-[18px]'>Review: </span>
                        <span className='text-[16px] text-gray-500'> {book.review}</span>
                    </div>
                    
                    <div className='space-x-3 mt-5'>
                        <span className='font-bold text-[18px]'>Tags: </span>
                        {book.tags.map((tag, index) => (
                            <span key={index} className="badge py-4 bg-green-50 text-green-500 font-semibold mr-5 rounded-2xl">
                                {tag}
                            </span>
                        ))}

                    </div>
                    <div className='divider my-0'></div>
                    <div>
                        <table className="w-80 border-none">
                            <tbody>
                                <tr>
                                    <td className='text-gray-500 text-[15px] py-1 font-semibold'>Number of Pages:</td>
                                    <td className='font-bold text-[16px]'>{book.totalPages}</td>
                                </tr>
                                <tr>
                                    <td className='text-gray-500 text-[15px] py-1 font-semibold'>Publisher:</td>
                                    <td className='font-bold text-[16px]'>{book.publisher}</td>
                                </tr>
                                <tr>
                                    <td className='text-gray-500 text-[15px] py-1 font-semibold'>Year of Publishing:</td>
                                    <td className='font-bold text-[16px]'>{book.yearOfPublishing}</td>
                                </tr>
                                <tr>
                                    <td className='text-gray-500 text-[15px] py-1 font-semibold'>Rating:</td>
                                    <td className='font-bold text-[16px]'>{book.rating}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="card-actions">
                        <button onClick={() => handleMArkAsRead(book)} className="btn text-black font-bold border border-gray-400">Mark as Read</button>
                        <button className="btn bg-[#50B1C9] text-white">Add To Wishlist</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;