import React from 'react'
import './Menu.scss'

const Menu = () => {
  return (
<div className="menu__container">
    <div className="logo__container">
        {/* <img src={process.env.PUBLIC_URL + '/images/iq_logo.png'} alt="" /> */}
        <h1>IQ Marketing</h1>
    </div>
    <div className="links__container">
                <a href="#portfolio">portfolio</a>
                <div className="kreska__pion"></div>
                        <a href="/">oferta</a>
                             <div className="kreska__pion"></div>
                                <a href="/">o nas</a>
                                     <div className="kreska__pion"></div>
                                       <a href="/">klienci</a>
                                            <div className="kreska__pion"></div>
                <a href="/">kontakt</a>
                     <div className="kreska__pion"></div>
                        <a href="/">news</a>
                             <div className="kreska__pion"></div>
                                <a href="/">kariera</a>
    </div>
</div>
  )
}

export default Menu