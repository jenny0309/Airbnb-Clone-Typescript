import { Button } from '@material-ui/core';
import React from 'react';
import './SearchPage.css';
import SearchResult from './SearchResult';

const SearchPage = () => {
  return (
    <div className='searchPage'>
      <div className='searchPage__info'>
        <p>62 stays ・ 26 August to 30 August ・ 2 guests</p>
        <h1>Stays nearby</h1>
        <Button variant='outlined'>Cancellation Flexibility</Button>
        <Button variant='outlined'>Type of place</Button>
        <Button variant='outlined'>Price</Button>
        <Button variant='outlined'>Rooms and beds</Button>
        <Button variant='outlined'>More filters</Button>

        <SearchResult
          img='https://photos.zillowstatic.com/fp/40de41fcd1f1561ab5f259c3150f0002-uncropped_scaled_within_1536_1152.webp'
          location='Private room in center of Vancouver'
          title='Stay at this spacious Edwardian House'
          description='1 guest ・ 1 bedroom ・ 1 bed ・ 1.5 shared bathrooms ・ Wifi ・ Kitchen ・ Free Parking ・ Washing Machine'
          star={4.73}
          price='$30 / night'
          total='$117 total'
        />

        <SearchResult
          img='https://photos.zillowstatic.com/fp/b29bfd0fd4bb4c66c68a718c4e6e3219-uncropped_scaled_within_1536_1152.webp'
          location='Private room in center of Vancouver'
          title='Independant luxury studio apartment'
          description='2 guest ・ 3 bedroom ・ 1 bed ・ 1.5 shared bathrooms ・ Wifi ・ Kitchen'
          star={4.3}
          price='$40 / night'
          total='$157 total'
        />

        <SearchResult
          img='https://photos.zillowstatic.com/fp/c4df754b393b97783ba17e4e3d97a293-cc_ft_576.webp'
          location='Private room in center of Vancouver'
          title='Vancouver Studio Apartments'
          description='4 guest ・ 4 bedroom ・ 4 bed ・ 2 bathrooms ・ Free Parking ・ Washing Machine'
          star={3.8}
          price='$35 / night'
          total='$207 total'
        />

        <SearchResult
          img='https://photos.zillowstatic.com/fp/fd2103439f381c91c4b4ce241de72189-uncropped_scaled_within_1536_1152.webp'
          location='Private room in center of Vancouver'
          title='30 mins to Burnaby, Excel Vancouver'
          description='1 guest ・ 1 bedroom ・ 1 bed ・ 1.5 shared bathrooms ・ Wifi ・ Kitchen ・ Free Parking ・ Washing Machine'
          star={4.1}
          price='$55 / night'
          total='$320 total'
        />

        <SearchResult
          img='https://photos.zillowstatic.com/fp/ee59a50dc051a91c941aa378a33d8028-uncropped_scaled_within_1536_1152.webp'
          location='Private room in center of Vancouver'
          title='Spacious Peaceful Modern Bedroom'
          description='3 guest ・ 1 bedroom ・ 1 bed ・ 1.5 shared bathrooms ・ Wifi ・ Free Parking ・ Dry Cleaning'
          star={5.0}
          price='$60 / night'
          total='$450 total'
        />

        <SearchResult
          img='https://photos.zillowstatic.com/fp/fb65d04f6324afe7999be91b59df5ee3-uncropped_scaled_within_1536_1152.webp'
          location='Private room in center of Vancouver'
          title='The Blue Room In Vancouver'
          description='2 guest ・ 1 bedroom ・ 1 bed ・ 1.5 shared bathrooms ・ Wifi ・ Dry Cleaning'
          star={4.23}
          price='$65 / night'
          total='$480 total'
        />

        <SearchResult
          img='https://photos.zillowstatic.com/fp/5e6ace96d13a1d22ac592f8f4f004519-uncropped_scaled_within_1536_1152.webp'
          location='Private room in center of Vancouver'
          title='5 Star Luxury Apartment'
          description='3 guest ・ 1 bedroom ・ 1 bed ・ 1.5 shared bathrooms ・ Wifi ・ Kitchen ・ Free Parking ・ Washing Machine'
          star={3.85}
          price='$90 / night'
          total='$650 total'
        />
      </div>
    </div>
  );
};

export default SearchPage;
