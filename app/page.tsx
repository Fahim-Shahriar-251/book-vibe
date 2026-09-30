import HomePageBanner from '@/components/homepage/Banner';
import React from 'react';
import HomePageBooks from '@/components/homepage/Books';

const HomePage = () => {
  return (
    <div>
      <HomePageBanner></HomePageBanner>
      <HomePageBooks></HomePageBooks>
    </div>
  );
};

export default HomePage;