import './Navbar.scss'
import { useState } from 'react'
import { CgProfile } from 'react-icons/cg';
import { MdOutlinePets } from 'react-icons/md';
import { AiFillMessage } from 'react-icons/ai';



import menuarrow from '../../assets/down-arrow.gif'


const currentUser = {
  name: 'João'
}



import logo from '../../assets/logo1.png'
function Navbar() {

  const [userMenu, setUserMenu] = useState(false);


  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  }
  return (
    <div className='Navbar'>
      <div className="Navbar__container">
        <div className="Navbar__logo">
          <img src={logo} alt="logo" 
          onClick={() => window.location.href = '/'}
          />
          <h1
          onClick={() => window.location.href = '/'}
          >adotePet</h1>
        </div>
        <div className="Navbar__links">
          <div className='link'>
            <a href="/">Sobre</a>
            <div className="Links__bar" />
          </div>
          <div className='link'>
            <a href="/adopt">Adotar</a>
            <div className="Links__bar" />
          </div>
          <div className='link'>
            <a href="/pets">Doar</a>
            <div className="Links__bar" />
          </div>
          <div className='link'>
            <a href="/register">Cadastrar</a>
            <div className="Links__bar" />
          </div>
          {currentUser.name ?
            <>
              <div className='link'>
                <h3
                  onMouseEnter={() => setUserMenu(!userMenu)}
                  
                >{currentUser.name}</h3>
                <div className="Links__bar" />
              </div>

              <button
              onClick={handleLogout}
              >Logout</button>
            </>
            : <button
              onClick={() => window.location.href = '/login'}
            >Login</button>
          }
        </div>
        <div className={`Navbar__menu ${userMenu ? 'active' : ''}`}>
          <a href="/profile"><CgProfile/></a>
          <a href="/pets"><MdOutlinePets/></a>
          <a href="/messages"><AiFillMessage/></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
