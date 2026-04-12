import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext.jsx';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadBooksCard from '../../components/homepage/readBookscard/ReadBooksCard.jsx';
import WishListCard from '../../components/homepage/wishListCard/WishListCard.jsx';

const Books = () => {
    const { storedBooks, wishlist } = useContext(BookContext);
    
    return (
        <div className='container mx-auto px-4 py-8'>
            <Tabs>
                <TabList>
                    <Tab>Read Books ({storedBooks.length})</Tab>
                    <Tab>Wishlist Books ({wishlist.length})</Tab>
                </TabList>

                {/* Tab 1: Read Books */}
                <TabPanel>
                    {storedBooks.length > 0 ? (
                        <div className="space-y-5 mt-5">
                            {storedBooks.map(book => (
                                <ReadBooksCard key={book.bookId} book={book} />
                            ))}
                        </div>
                    ) : (
                        <h2 className='text-4xl text-center font-bold my-20'>No Books Marked as Read</h2>
                    )}
                </TabPanel>

                {/* Tab 2: Wishlist Books */}
                <TabPanel>
                    {wishlist.length > 0 ? (
                        <div className="space-y-5 mt-5">
                            {wishlist.map(book => (
                                <WishListCard key={book.bookId} book={book} />
                            ))}
                        </div>
                    ) : (
                        <h2 className='text-4xl text-center font-bold my-20'>No Books in Wishlist</h2>
                    )}
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Books;