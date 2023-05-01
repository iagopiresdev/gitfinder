import React, { useEffect, useState } from 'react';
import Searchbar from './components/Searchbar';
import Profile from './components/Profile';
import Header from './components/Header';
import './App.css'

function App() {
  const [profileData, setProfileData] = useState(null);
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  const handleData = (data) => {
    setProfileData(data);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className='container'>
        <Header theme={toggleTheme}/>
        <Searchbar onProfileFetched={handleData} />
        <Profile profileData={profileData}/>
    </div>
  );
}

export default App;
