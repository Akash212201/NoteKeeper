import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { TiThMenu } from 'react-icons/ti';

const Header = ({ setSearchQuery }) => {
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <div className='flex justify-between items-center px-10 py-4'>
        <div className='w-1/5 text-2xl font-semibold'>
          <h1>
            Note K<span className='text-primary-color'>ee</span>per
          </h1>
        </div>
        <div className='w-[40%] border border-primary-color rounded-lg overflow-hidden px-2 flex justify-between items-center bg-white'>
          <input
            type='text'
            className='px-1 py-2 w-full border-none outline-none text-text-light'
            placeholder='Search by title...'
            onChange={handleSearchInputChange}
          />
          <FaSearch className='text-2xl text-primary-color' />
        </div>
        <div className='text-2xl ml-10 cursor-pointer'>
          <TiThMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
