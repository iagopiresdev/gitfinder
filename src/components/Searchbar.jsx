import './Searchbar.css'
import search from '../assets/icon-search.svg'

function Searchbar() {
  return (
    <div className='searchbar'>
        <img className='searchbar__icon' src={search} alt='search' />
        <input className='searchbar__input' type='text' placeholder='Procure por um usuário...' />
        <button className='searchbar__button'>Search</button>

    </div>
  )
}

export default Searchbar