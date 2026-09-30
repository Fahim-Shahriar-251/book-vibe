import { BookType } from '@/app/type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';

const ListedBooksCard = ({ book }: { book: BookType }) => {
    return (
        <div className="flex flex-col gap-5 mb-5 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:flex-row">

            {/* Book Image */}
            <div className="relative h-56 w-full shrink-0 overflow-hidden rounded-xl bg-gray-100 sm:h-48 sm:w-36">
                <Image
                    src={book.image}
                    alt={book.bookName}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Book Information */}
            <div className="flex flex-1 flex-col">

                {/* Title & Author */}
                <div>
                    <h2 className="text-xl font-bold text-gray-800">
                        {book.bookName}
                    </h2>

                    <p className="mt-1 text-sm text-gray-500 font-bold">
                        By:{' '}
                        <span className="font-medium text-gray-700">
                            {book.author}
                        </span>
                    </p>
                </div>

                {/* Tags & Publishing Year */}
                <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {book.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full bg-green-50 px-3 py-1 font-medium text-green-600"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Publishing Year */}
                    <div className="flex items-center gap-1 text-gray-500">
                        <CiLocationOn className="text-lg" />
                        <span>
                            Published {book.yearOfPublishing}
                        </span>
                    </div>

                </div>

                <div className="my-4 border-t border-gray-100" />

                {/* Publisher & Pages */}
                <div className="flex flex-wrap gap-6 text-sm text-gray-500">
                    <p>
                        Publisher:{' '}
                        <span className="font-medium text-gray-700">
                            {book.publisher}
                        </span>
                    </p>

                    <p>
                        Pages:{' '}
                        <span className="font-medium text-gray-700">
                            {book.totalPages}
                        </span>
                    </p>
                </div>

                {/* Category & Rating */}
                <div className="mt-4 flex flex-wrap items-center gap-4">

                    {/* Category */}
                    <span className="rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700">
                        Category: {book.category}
                    </span>

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                        <FaStar className="text-yellow-400" />

                        <span className="text-sm font-semibold text-gray-700">
                            {book.rating}
                        </span>

                        <span className="text-sm text-gray-400">
                            / 5
                        </span>
                    </div>

                    {/* View Details */}
                    <div>
                        <Link
                            href={`/books/${book.bookId}`}
                            className="inline-flex rounded-lg bg-green-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700"
                        >
                            View Details
                        </Link>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ListedBooksCard;