import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className="wrapper">  
        <div className='left'>
          <div className="item">
            <img src="images/icon.png" alt="" />
            <KeyboardArrowDownIcon />
          </div>
        </div>
        <div className='center'></div>
        <div className='right'></div>
      </div>
    </div>
  )
}

export default Navbar