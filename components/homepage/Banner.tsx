import React from 'react';
import Image from 'next/image';
import bannerImage from '@/assets/hero_img.jpg';

const HomePageBanner = () => {
    return (
        <section className="px-4 py-6 sm:px-6 lg:px-8">
            <div className="container mx-auto overflow-hidden rounded-3xl bg-linear-to-br from-gray-100 to-gray-200 shadow-lg">
                <div className="grid items-center gap-8 p-6 sm:p-8 md:grid-cols-2 md:p-10 lg:p-14">

                    {/* Content */}
                    <div className="space-y-5 text-center md:text-left">
                        <span className="inline-block rounded-full bg-green-100 px-4 py-1.5 text-sm font-semibold text-green-700">
                            Discover your next read
                        </span>

                        <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                            Books to freshen up
                            <br />
                            <span className="text-green-500">
                                your bookshelf
                            </span>
                        </h2>

                        <p className="max-w-lg text-sm leading-6 text-gray-600 sm:text-base">
                            Explore amazing books, discover new stories, and
                            find your next favorite read.
                        </p>

                        <button className="btn rounded-full border-none bg-green-500 px-6 text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-green-600 hover:shadow-lg">
                            View The List
                            <span className="text-lg">→</span>
                        </button>
                    </div>

                    {/* Image */}
                    <div className="relative">
                        <div className="absolute -inset-2 rounded-3xl bg-green-400/20 blur-2xl" />

                        <Image
                            src={bannerImage}
                            alt="Books on a bookshelf"
                            className="relative h-auto w-full rounded-2xl object-cover shadow-xl"
                            priority
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HomePageBanner;