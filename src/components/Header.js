import React from 'react'
import '../styles/Header.css'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'
import { auth } from '../firebase'

const Header = () => {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if(user){
            auth.signOut()
        }
    }


  return (
    <div className='header'>
        <Link to='/'>
        <img  className='header__logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" />
        </Link>
        <div className="header__search">
            <input className='header__searchInput' type='text' placeholder='This site is a clone, it´s fake, created only for study!'/>
            <SearchIcon className='header__searchIcon'/>
        </div>
        <div className="header__nav">
            <Link to={!user && '/login'}> 
                <div onClick={handleAuthentication} className="header__option header__responsive">
                    <span className='header__optionLineOne'>Hello Guest</span>
                    <span className='header__optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
                </div>
            </Link>
            <div className="header__option">
                <span className='header__optionLineOne header__none'>Returns</span>
                <span className='header__optionLineTwo header__none'>& Orders</span>
            </div>
            <div className="header__option">
                <span className='header__optionLineOne header__none'>Your</span>
                <span className='header__optionLineTwo header__none'>Prime</span>
            </div>
            <Link to='/checkout'>
            <div className="header__optionBasket">
                <ShoppingBasketIcon/>
                <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
            </div>
            </Link>
        </div>

    </div>
  )
}

export default Header