'use client'
import React, { useContext, useState } from 'react';
import { BooksContext } from '../context/BooksContext';
import WishlistCard from '@/components/books/ListedBooksCard';
import { BookType } from '../type';

const ListedBooksPage = () => {

    const booksProvider = useContext(BooksContext);

    const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("rating");

    const sortBooks = (books: BookType[]) => {
        const srotedBooks = [...books];

        if (sortBy == "rating") {
            srotedBooks.sort((a, b) => b.rating - a.rating);
        }
        else if (sortBy == "pages") {
            srotedBooks.sort((a, b) => b.totalPages - a.totalPages);
        }
        else {
            srotedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        }

        return srotedBooks;
    }

    const sortedReadBook = sortBooks(booksProvider.readBooks);
    const sortedWishlist = sortBooks(booksProvider.wishlist);

    return (
        <div>
            <div className='text-center'>
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as "rating" | "pages" | "year")}
                    className="select select-success text-center mt-5 mb-5">

                    <option value={"rating"}>Rating</option>
                    <option value={"pages"}>Number of Pages</option>
                    <option value={"year"}>Published Year</option>
                </select>
            </div>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift">
                <input type="radio" name="my_tabs_3" className="tab" aria-label={`Read Books (${booksProvider.readBooks.length})`} />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {sortedReadBook.length > 0 ?
                        sortedReadBook.map(book => (
                            <WishlistCard key={book.bookId} book={book} />
                        )) :
                        <p className="text-center text-lg font-semibold">
                            No Read Books Found
                        </p>
                    }
                </div>

                <input type="radio" name="my_tabs_3" className="tab" aria-label={`Wishlist (${booksProvider.wishlist.length})`} defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {sortedWishlist.length > 0 ?
                        sortedWishlist.map(book => (
                            <WishlistCard key={book.bookId} book={book} />
                        )) :
                        <p className="text-center text-lg font-semibold">
                            No Wishlist Books Found
                        </p>
                    }
                </div>
            </div>
        </div >
    );
};

export default ListedBooksPage;