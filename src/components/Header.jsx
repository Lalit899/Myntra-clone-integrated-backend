import React from 'react'
import logo from '/logo/myntra_logo.webp'
import { CgProfile } from "react-icons/cg";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaBagShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
const bag = useSelector((store) => store.bag)

  return (
    <>
    <header>
        <div className="logo_container">
            <Link to="/"><img className="myntra_home" src={logo} alt="Myntra Home" /></Link>
        </div>
        <nav className="nav_bar">
            <Link to="/">Men</Link>
            <Link to="/">Women</Link>
            <Link to="/">Kids</Link>
            <Link to="/">Home & Living</Link>
            <Link to="/">Beauty</Link>
            <Link to="/">Studio <sup>New</sup></Link>
        </nav>
        <div className="search_bar">
            <span className="material-symbols-outlined search_icon">search</span>
            <input className="search_input" placeholder="Search for products, brands and more" />
        </div>
        <div className="action_bar">
            <div className="action_container">
                {/* <span className="material-symbols-outlined action_icon">person</span> */}
                <CgProfile />
                <span className="action_name">Profile</span>
            </div>

            <div className="action_container">
                {/* <span className="material-symbols-outlined action_icon">favorite</span> */}
                <FaHeartCirclePlus/>
                <span className="action_name">Wishlist</span>
            </div>

            <Link className="action_container" to="/bag">
                {/* <span className="material-symbols-outlined action_icon">shopping_bag</span> */}
                <FaBagShopping/>
                <span className="action_name">Bag</span>
                <span className="bag-item-count">{bag.length}</span>
            </Link>
        </div>
    </header>
    </>
  )
}

export default Header