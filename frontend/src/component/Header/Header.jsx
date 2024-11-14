import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'
const Header = () => {
  return (
    <div>
      <div className="header">
        <img src={assets.header}></img>

      </div>
      <div className="header-contents">
        <h2>
          Get your favorite meals now!
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus natoque penatibus et magnis dis parturient montes. Lorem ips. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam deserunt nam voluptatem vero animi, molestiae architecto adipisci voluptas, nisi sequi aut eos similique, laborum sint mollitia exercitationem
          </p>

        <button>View Menu</button>
      </div>
    </div>
  )
}

export default Header
