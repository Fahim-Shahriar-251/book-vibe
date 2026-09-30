import { BookType } from '@/app/type';
import BookCard from '@/components/homepage/BookCard';
import React from 'react';

const getBooks = async (): Promise<BookType[]> => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);
        const data = await res.json();
        return data;
    }
    catch (error) {
        console.log("Error fetching book data: ", error);
        return [];
    }
}

const HomePageBooks = async () => {

    const booksData: BookType[] = await getBooks();

    return (
        <div className='container mx-auto flex flex-col items-center'>
            <h2 className='text-4xl m-4 font-extrabold bg-linear-to-r from-green-800 to-green-500 bg-clip-text text-transparent'>
                Books
            </h2>
            <div className='grid gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-clos-4'>
                {
                    booksData.slice(0, 9).map(book => {
                        return (
                            <BookCard key={book.bookId} book={book}></BookCard>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default HomePageBooks;