import Image from 'next/image';
import Link from 'next/link';
import { BookType } from '@/app/type';

interface BookCardProps {
    book: BookType;
}

const BookCard = ({ book }: BookCardProps) => {
    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-xl">

            {/* Book Cover */}
            <div className="relative h-64 overflow-hidden bg-slate-100 sm:h-72">

                {/* Category */}
                <div className="absolute left-3 top-3 z-10">
                    <span className="rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 shadow-md backdrop-blur-sm">
                        {book.category}
                    </span>
                </div>

                {/* Rating */}
                <div className="absolute right-3 top-3 z-10 flex items-center gap-1 rounded-full bg-black/70 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
                    <span className="text-yellow-400">★</span>
                    {book.rating}
                </div>

                <Image
                    src={book.image}
                    alt={book.bookName}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-5 transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-4">

                {/* Title & Author */}
                <div>
                    <h2 className="line-clamp-2 text-lg font-bold leading-tight text-slate-900 transition-colors duration-300 group-hover:text-emerald-600">
                        {book.bookName}
                    </h2>

                    <p className="mt-1.5 text-xs text-slate-500">
                        by <span className="font-medium text-slate-700">
                            {book.author}
                        </span>
                    </p>
                </div>

                {/* Tags */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                    {book.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-medium text-slate-600 transition-colors hover:bg-emerald-50 hover:text-emerald-600"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Book Information */}
                <div className="mt-4 grid grid-cols-2 gap-2 border-y border-slate-100 py-3">

                    <div>
                        <p className="text-[10px] text-slate-400">
                            Pages
                        </p>
                        <p className="mt-0.5 text-xs font-semibold text-slate-700">
                            {book.totalPages}
                        </p>
                    </div>

                    <div>
                        <p className="text-[10px] text-slate-400">
                            Published
                        </p>
                        <p className="mt-0.5 text-xs font-semibold text-slate-700">
                            {book.yearOfPublishing}
                        </p>
                    </div>

                </div>

                {/* Publisher */}
                <p className="mt-3 truncate text-[10px] text-slate-400">
                    Published by{' '}
                    <span className="font-medium text-slate-600">
                        {book.publisher}
                    </span>
                </p>

                {/* Button */}
                <Link
                    href={`/books/${book.bookId}`}
                    className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-3 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:bg-emerald-600 active:scale-95"
                >
                    View Details
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                    </span>
                </Link>  
            </div>
        </article>
    );
};

export default BookCard;