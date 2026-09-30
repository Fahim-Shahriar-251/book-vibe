'use client';
import React, { useState } from 'react';
import { createContext } from 'react';
import { BookType } from '../type';

export interface BooksContextType {
    readBooks: BookType[];
    setReadBooks: React.Dispatch<React.SetStateAction<BookType[]>>;
    wishlist: BookType[];
    setWishlist: React.Dispatch<React.SetStateAction<BookType[]>>;
}

export const BooksContext = createContext<BooksContextType>({
    readBooks: [],
    wishlist: [],
    setReadBooks: () => { },
    setWishlist: () => { },
});
const BooksProvider = ({ children }: { children: React.ReactNode }) => {

    const [readBooks, setReadBooks] = useState<BookType[]>([]);
    const [wishlist, setWishlist] = useState<BookType[]>([]);

    const sharedData = {
        readBooks,
        setReadBooks,
        wishlist,
        setWishlist
    };

    return (
        <BooksContext.Provider value={sharedData}>{children}</BooksContext.Provider>
    );
};

export default BooksProvider;