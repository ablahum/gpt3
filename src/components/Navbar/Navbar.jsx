import { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

import logo from '../../assets/logo.svg'
import './navbar.css'

const Menus = () => (
  <>
    <p>
      <a href='#home'>Home</a>
    </p>
    <p>
      <a href='#wgpt3'>What is GPT3?</a>
    </p>
    <p>
      <a href='#possibility'>Open aI</a>
    </p>
    <p>
      <a href='#features'>Case Studies</a>
    </p>
    <p>
      <a href='#blog'>Library</a>
    </p>
  </>
)

const Sign = () => (
  <>
    <p>Sign In</p>

    <button type='button'>Sign Up</button>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links__logo'>
          <img src={logo} />
        </div>

        <div className='gpt3__navbar-links__container'>
          <Menus />
        </div>
      </div>

      <div className='gpt3__navbar-sign'>
        <p>Sign in</p>

        <button type='button'>Sign up</button>
      </div>

      <div className='gpt3__navbar-menu'>
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
          <div className='gpt3__navbar-menu__container scale-up-center'>
            <div className='gpt3__navbar-menu__container-links'>
              <Menus />
            </div>

            <div className='gpt3__navbar-menu__container-sign'>
              <p>Sign in</p>

              <button type='button'>Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
