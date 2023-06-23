import './Profile.scss'
import proflie from '../../assets/profile.png';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import Loading from '../../components/Loading/Loading';
import newRequest from '../../utils/newRequest';
import addCep from '../../utils/addCep';

function Profile() {


  const [cep, setCep] = useState<string>('');
  const [currentUser, setCurrentUser] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [location, setLocation] = useState<any>(undefined);


  useEffect(() => {
    findUser();
  }, []);

  const findUser = async () => {
    try {
      const user = await JSON.parse(localStorage.getItem('currentUser') || []);
      setCurrentUser(user);
      const { _id } = user;
      const userData = await newRequest.get(`user/${_id}`);
      setLocation(userData.data.location);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }

  }
  const handleCep = async () => {
    try {
      const location = await addCep(cep);
      const { state, city, neighborhood } = location.data;
      const { _id } = currentUser;
      console.log(_id)
      const user = await newRequest.put(`user/${_id}`, { location: { state, city, neighborhood } });
      console.log(user.data);
      setLocation(
        {
          state: user.data.state,
          city: user.data.city,
          neighborhood: user.data.neighborhood
        }
      )


    } catch (error) {
      console.log(error)
    }
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
                <input type="number" placeholder="cep" onChange={(e) => setCep(e.target.value)} />
                <label htmlFor="">Cep</label>
                <BsFillCheckCircleFill onClick={handleCep} />
              </div>

            </form>
          </div>
          {isLoading ? <Loading /> :
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

            </div>}
        </div>
      </div>
      <div className='spacer main__footer' />
    </div >
  )
}

export default Profile
