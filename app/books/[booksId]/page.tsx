import { BookType } from '@/app/type';
import BookDetailCard from '@/components/books/BookDetailCard';
import React from 'react';

interface BookDetailPageProps {
    params: Promise<{
        booksId: string;
    }>
}

const getBooks = async (): Promise<BookType[]> => {
    const res = await fetch("http://localhost:3000//booksData.json");
    const data = await res.json();
    return data;
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