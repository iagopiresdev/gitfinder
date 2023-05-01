import { useState, useEffect } from 'react';

const getProfile = (username) => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    if (!username) return;

    const fetchProfile = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.status}`);
        }
        const data = await response.json();
        setProfileData(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchProfile();
  }, [username]);

  return profileData;
};

export default getProfile;
