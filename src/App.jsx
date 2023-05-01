import React, { useState } from 'react';
import Searchbar from './components/Searchbar';
import Profile from './components/Profile';
import './App.css'

function App() {
  const [profileData, setProfileData] = useState(null);

  const handleData = (data) => {
    setProfileData(data);
  };

  return (
    <div className='container'>
      <Searchbar onProfileFetched={handleData} />
      <Profile profileData={profileData} />
    </div>
  );
}

export default App;
