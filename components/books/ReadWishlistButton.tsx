'use client';
import { BooksContext } from '@/app/context/BooksContext';
import { BookType } from '@/app/type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const ReadWishlistButton = ({ book }: { book: BookType }) => {

    const booksProvider = useContext(BooksContext);

    const handleReadBook = () => {
        const alreadyExists = booksProvider.readBooks.some(
            (item) => item.bookId === book.bookId
        );
        if (alreadyExists) {
            toast.error("Already exists!");
            return;
        }
        booksProvider.setReadBooks([...booksProvider.readBooks, book]);
        toast.success("Added to read books successfully");
    }

    const handleWishlist = () => {
        const alreadyExists = booksProvider.wishlist.some(
            (item) => item.bookId === book.bookId
        );
        if (alreadyExists) {
            toast.error("Already exists!");
            return;
        }
        booksProvider?.setWishlist([...booksProvider.wishlist, book]);
        toast.success("Added to wishlist successfully");
    }

    return (
        <div className='flex gap-5'>
            <button onClick={handleReadBook}
                className="btn btn-xs sm:btn-sm md:btn-md">
                Read
            </button>
            <button onClick={handleWishlist}
                className="btn btn-xs sm:btn-sm md:btn-md">
                Wishlist
            </button>
        </div>
    );
};

export default ReadWishlistButton;