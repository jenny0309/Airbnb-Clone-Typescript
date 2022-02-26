import React from 'react';
import Banner from './Banner';
import Card from './Card';
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
      <Banner />

      <div className='home__section'>
        <Card
          src='https://photos.zillowstatic.com/fp/72c401a620a04d9d25d93ebbfd76ad59-uncropped_scaled_within_1536_1152.webp'
          title='Online Experiences'
          description='Unique activities we can do together, led by a world of hosts'
        />
        <Card
          src='https://photos.zillowstatic.com/fp/16a20333425f59a55ba0830ac8e4ca44-uncropped_scaled_within_1536_1152.webp'
          title='Unique Stays'
          description='Spaces that are more than just a place to sleep'
        />
        <Card
          src='https://photos.zillowstatic.com/fp/1dad31613823c45682a194706e088ccd-cc_ft_960.webp'
          title='Entire Homes'
          description='Comfortable private places with room for friends or family'
        />
        <Card
          src='https://photos.zillowstatic.com/fp/78303b00ba2e8fbb42fa1938825a67ae-uncropped_scaled_within_1536_1152.webp'
          title='3 Bedroom Flat in Vancouver'
          description='Superhost with a stunning view of the beachside on Sunny Vancouver'
          price="$130/night"
        />
        <Card
          src='https://photos.zillowstatic.com/fp/3c366b102d596cf134fa61702f572a10-uncropped_scaled_within_1536_1152.webp'
          title='Penthouse in Calgary'
          description='Enjoy the amazing sights of Calgary with this stunning penthouse'
          price="$350/night"
        />
        <Card
          src='https://photos.zillowstatic.com/fp/def6141a5c839f3b6d3fb0008c0626b3-uncropped_scaled_within_1536_1152.webp'
          title='1 Bedroom Apartment'
          description='Superhost with great amenities and a fabulous shopping complex nearby'
          price="$70/night"
        />
      </div>
    </div>
  );
};

export default Home;
