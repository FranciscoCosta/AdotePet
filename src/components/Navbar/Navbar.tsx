import './Navbar.scss'

import logo from '../../assets/logo1.png'
function Navbar() {
  return (
    <div className='Navbar'>
      <div className="Navbar__container">
        <div className="Navbar__logo">
          <img src={logo} alt="logo" />
          <h1>adotePet</h1>
        </div>
        <div className="Navbar__links">
          <div className='link'>
            <a href="/">Sobre</a>
            <div className="Links__bar" />
          </div>
          <div className='link'>
            <a href="/">Adotar</a>
            <div className="Links__bar" />
          </div>
          <div className='link'>
            <a href="/">Doar</a>
            <div className="Links__bar" />
          </div>
          <div className='link'>
            <a href="/">Francisco</a>
            <div className="Links__bar" />
          </div>
          <button>Logout</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
