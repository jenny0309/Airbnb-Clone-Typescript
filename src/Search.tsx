import React, { useState } from 'react';
import { DateRangePicker, RangeKeyDict, Range } from 'react-date-range';
import { useNavigate } from 'react-router-dom';
import './Search.css';

// main style file
import 'react-date-range/dist/styles.css';
// theme css file
import 'react-date-range/dist/theme/default.css';

import PeopleIcon from '@material-ui/icons/People';
import { Button } from '@material-ui/core';

const Search = () => {
  const navigation = useNavigate();

  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(new Date());

  const selectionRange: Range = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };

  const handleSelect = (rangesByKey: RangeKeyDict) => {
    setStartDate(rangesByKey.selection.startDate);
    setEndDate(rangesByKey.selection.endDate);
    // console.log(rangesByKey);
  };

  return (
    <div className='search'>
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2>
        Number of guests
        <PeopleIcon />
      </h2>
      <input min={0} defaultValue={2} type='number' />
      <Button
        onClick={() => {
          navigation('/search');
        }}
      >
        Search Airbnb
      </Button>
    </div>
  );
};

export default Search;
