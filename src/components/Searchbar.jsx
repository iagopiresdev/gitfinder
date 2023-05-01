import React, { useState, useEffect } from 'react';
import '../styles/Searchbar.css';
import search from '../assets/icon-search.svg';
import getProfile from '../hooks/getProfile';

function Searchbar({ onProfileFetched }) {
  const [inputValue, setInputValue] = useState('');
  const [username, setUsername] = useState('');
  const profileData = getProfile(username);

  useEffect(() => {
    if (profileData) {
      onProfileFetched(profileData);
    }
  }, [profileData, onProfileFetched]);

  const handleSearchClick = () => {
    setUsername(inputValue);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className='searchbar'>
      <img className='searchbar__icon' src={search} alt='search' />
      <input
        className='searchbar__input'
        type='text'
        placeholder='Procure por um usuário...'
        value={inputValue}
        onChange={handleInputChange}
      />
      <button className='searchbar__button' onClick={handleSearchClick}>
        Search
      </button>
    </div>
  );
}

export default Searchbar;
