import { BookType } from '@/app/type';
import Image from 'next/image';
import React from 'react';
import ReadWishlistButton from './ReadWishlistButton';

interface BookDetailCardProps {
    book: BookType;
}

const BookDetailCard = ({ book }: BookDetailCardProps) => {
    return (
        <div className='container mx-auto'>
            <div className='grid items-center mt-10 sm:grid-cols-1 md:grid-cols-2 pr-2'>
                <div className='flex justify-center'>
                    <Image src={book.image} alt="image" width={300} height={300}></Image>
                </div>
                <div className='space-y-3'>
                    <h2 className='font-bold text-3xl'>{book.bookName}</h2>
                    <p>By: {book.author}</p>
                    <hr className='text-gray-300' />
                    <p>{book.category}</p>
                    <hr className='text-gray-300' />
                    <p>
                        <span className='font-bold'>Review: </span>
                        {book.review}
                    </p>
                    <p className='text-green-500'>
                        <span className='text-black font-bold'>Tags: </span>{book.tags}
                    </p>
                    <hr className='text-gray-300' />
                    <p>Number of pages: <span className='font-bold'>{book.totalPages}</span></p>
                    <p>Publisher: <span className='font-bold'>{book.publisher}</span></p>
                    <p>Year of publishing: <span className='font-bold'>{book.yearOfPublishing}</span></p>
                    <p>Rating: <span className='font-bold'>{book.rating}</span></p>

                    
                    <ReadWishlistButton book={book}></ReadWishlistButton>
                </div>
            </div>
        </div>
    );
};

export default BookDetailCard;