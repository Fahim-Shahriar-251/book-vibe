import { BookType } from '@/app/type';
import BookDetailCard from '@/components/books/BookDetailCard';
import React from 'react';

interface BookDetailPageProps {
    params: Promise<{
        booksId: string;
    }>
}

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

const BookDetailPage = async({ params }: BookDetailPageProps) => {

    const {booksId} = await params;
    const booksData = await getBooks();
    const book = booksData.find(book => {
        return String(book.bookId) === String(booksId);
    })

    if (!book) {
        return <div>Book not found</div>;
    }
  
    return ( 
        <div>
            <BookDetailCard book={book}></BookDetailCard>
        </div>
    );
};

export default BookDetailPage;