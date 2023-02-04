import { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

import logo from '../../assets/logo.svg'
import './navbar.css'

const Links = () => (
  <>
    <p>
      <a href='#home'>Home</a>
    </p>

    <p>
      <a href='#wgpt3'>What is GPT3?</a>
    </p>

    <p>
      <a href='#possibility'>Open AI</a>
    </p>

    <p>
      <a href='#features'>Case Studies</a>
    </p>

    <p>
      <a href='#blog'>Library</a>
    </p>
  </>
)

const Signs = () => (
  <>
    <p>
      <a href='#'>Sign In</a>
    </p>

    <button type='button'>Sign Up</button>
  </>
)

const Menu = ({ toggleMenu, setToggleMenu }) => (
  <>
    {toggleMenu ? (
      <RiCloseLine
        color='#fff'
        size={27}
        onClick={() => setToggleMenu(false)}
      />
    ) : (
      <RiMenu3Line
        color='#fff'
        size={27}
        onClick={() => setToggleMenu(true)}
      />
    )}

    {toggleMenu && (
      <div className='navbar-menu__wrapper scale-up-center'>
        <div className='navbar-menu__wrapper-links'>
          <Links />
        </div>

        <div className='navbar-menu__wrapper-sign'>
          <Signs />
        </div>
      </div>
    )}
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className='navbar'>
      <div className='navbar-logo'>
        <img
          src={logo}
          alt='logo'
        />
      </div>

      <div className='navbar-link'>
        <Links />
      </div>

      <div className='navbar-sign'>
        <Signs />
      </div>

      <div className='navbar-menu'>
        <Menu
          toggleMenu={toggleMenu}
          setToggleMenu={setToggleMenu}
        />
      </div>
    </div>
  )
}

export default Navbar
