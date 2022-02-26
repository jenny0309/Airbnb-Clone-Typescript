import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Banner.css';
import Search from './Search';

const Banner = () => {
  const navigation = useNavigate();

  const [showSearch, setShowSearch] = useState(false);

  const handleChange = () => {
    setShowSearch(!showSearch);
  };

  return (
    <div className='banner'>
      <div className='banner__search'>
        <Button
          className='banner__searchButton'
          variant='outlined'
          onClick={handleChange}
        >
          {showSearch ? 'Hide' : 'Search Dates'}
        </Button>
        {showSearch && <Search />}
      </div>
      <div className='banner__info'>
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you
        </h5>
        <Button
          variant='outlined'
          onClick={() => {
            navigation('/search');
          }}
        >
          Explore Nearby
        </Button>
      </div>
    </div>
  );
};

export default Banner;
