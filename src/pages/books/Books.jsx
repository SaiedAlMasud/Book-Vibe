import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext.jsx';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadBooksCard from '../../components/homepage/readBookscard/ReadBooksCard.jsx';

const Books = () => {
    const { storedBooks, wishlist } = useContext(BookContext);
    return (
        <div className='container mx-auto'>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                {
                    storedBooks.length > 0 ? (
                        storedBooks.map(book => (
                            <TabPanel key={book.bookId} className="my-5">
                                <ReadBooksCard book={book}/>
                            </TabPanel>
                        ))
                    ) : (
                        <TabPanel className="my-5">
                            <h2 className='text-4xl text-center font-bold my-20'>No Books Marked as Read</h2>
                        </TabPanel>
                    )
                }
                {
                    wishlist.length > 0 ? (
                        wishlist.map(book => (
                            <TabPanel key={book.bookId} className="my-5">
                                <h2>{book.bookName}</h2>
                            </TabPanel>
                        ))
                    ) : (
                        <TabPanel className="my-5">
                            <h2 className='text-4xl text-center font-bold my-20'>No Books in Wishlist</h2>
                        </TabPanel>
                    )
                }
            </Tabs>
        </div>
    );
};

export default Books;   
                    