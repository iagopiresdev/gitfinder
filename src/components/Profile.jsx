import React from 'react';
import '../styles/Profile.css';
import profilepicture from '../assets/profile-picture.png';
import iconlocation from '../assets/icon-location.svg';
import icontwitter from '../assets/icon-twitter.svg';
import iconcompany from '../assets/icon-company.svg';
import iconwebsite from '../assets/icon-website.svg';

function Profile({ profileData }) {
  if (!profileData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile">
      <img className="profile-picture" src={profileData.avatar_url || profilepicture} alt="profilepicture" />
      <div className="profile-container">
        <div className="profile-name-joined">
          <h1 className="profile-name">{profileData.name || 'Anonymous'}</h1>
          <p>Joined {new Date(profileData.created_at).toLocaleDateString()}</p>
        </div>
        <h3 className="at">@{profileData.login}</h3>
        <p className="bio">{profileData.bio || 'This profile has no bio'}</p>

        <div className='stats-container'>
          <div className='repos-container'>
            <h4>Repos</h4>
            <p>{profileData.public_repos}</p>
          </div>
          <div className='followers-container'>
            <h4>Followers</h4>
            <p>{profileData.followers}</p>
          </div>
          <div className='following-container'>
            <h4>Following</h4>
            <p>{profileData.following}</p>
          </div>
        </div>

        <div className="info-grid">
          <div className="info-container">
            <img src={iconlocation} alt="location icon" />
            <p>{profileData.location || 'No location provided'}</p>
          </div>
          <div className="info-container">
            <img src={icontwitter} alt="twitter icon" />
            <p>{profileData.twitter_username || 'Indisponível'}</p>
          </div>
          <div className="info-container">
            <img src={iconwebsite} alt="website icon" />
            <p className="toc">{profileData.blog.replace('https://www.','') || 'No website provided'}</p>
          </div>
          <div className="info-container">
            <img src={iconcompany} alt="company icon" />
            <p>{profileData.company || 'Indisponível'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
