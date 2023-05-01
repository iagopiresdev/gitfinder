import './Profile.css';
import profilepicture from '../assets/profile-picture.png';
import iconlocation from '../assets/icon-location.svg';
import icontwitter from '../assets/icon-twitter.svg';
import iconcompany from '../assets/icon-company.svg';
import iconwebsite from '../assets/icon-website.svg';

function Profile () {
  return (
    <div className="profile">
      <img className='profile-picture' src={profilepicture} alt='profilepicture'></img>
      <div className='profile-container'>
        <div className='profile-name-joined'>
          <h1 className='profile-name'>Iago Pires</h1>
          <p>Joined 14 Jan 2022</p>
        </div>
        <h3 className='at'>@iagopiresdev</h3>
        <p className='bio'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, ut suscipit pariatur accusamus voluptates </p>
        
        
        <div className='stats-container'>
          <div className='repos-container'>
            <h4>Repos</h4>
            <p>0</p>
          </div>
          <div className='followers-container'>
            <h4>Followers</h4>
            <p>0</p>
          </div>
          <div className='following-container'>
            <h4>Following</h4>
            <p>0</p>
          </div>
        </div>


        <div className='info-grid'>
          <div className='info-container'>
            <img src={iconlocation} alt='location icon'></img>
            <p>Manaus</p>
          </div>
          <div className='info-container'>
            <img src={icontwitter} alt='twitter icon'></img>
            <p>twitter</p>
          </div>
          <div className='info-container'>
            <img src={iconwebsite} alt='website icon'></img>
            <p className='toc'>link</p>
          </div>
          <div className='info-container'>
            <img src={iconcompany} alt='company icon'></img>
            <p>trabalha</p>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Profile;
