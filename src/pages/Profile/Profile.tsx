import './Profile.scss'
import proflie from '../../assets/profile.png';
import { BsFillCheckCircleFill } from 'react-icons/bs';


function Profile() {


  const currentUser = {
    name: 'João',
    email: 'joão@gmail.com',
  }
  return (
    <div className='Profile'>
      <div className="Profile__container">
        <div className="Profile__left">


        </div>
        <div className="Profile__right">
          <div className="Profile__right__header">
          <h3>Adicionar/Modificar informação</h3>
          <form action="POST">
            <div className='input__group'>
              <input type="file"
                autoComplete='off'
                placeholder=' '
                name="image"
              />
              <label htmlFor="">Imagem</label>
              <BsFillCheckCircleFill />
            </div>
          </form>
          <form action="POST">
            <div className='input__group'>
              <input type="number" placeholder="cep" />
              <label htmlFor="">Cep</label>
              <BsFillCheckCircleFill />
            </div>

          </form>
          </div>
          <div className="Profile__right__display">
            <img src={currentUser.img !== undefined ? currentUser.img : proflie} alt="" />
            <p>Nome: <span>{currentUser.name}</span></p>
            <p>Nome: <span>{currentUser.email}</span></p>
            {
              currentUser.location !== undefined &&
              <>
                <p>Estado: <span>{currentUser.location.state}</span></p>
                <p>Cidade: <span>{currentUser.location.city}</span></p>
                <p>Bairo: <span>{currentUser.location.neighborhood}</span></p>
              </>
            }

          </div>
        </div>
      </div>
      <div className='spacer main__footer' />
    </div >
  )
}

export default Profile
