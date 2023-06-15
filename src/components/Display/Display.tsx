import pets from '../../data.json';
import logo from '../../assets/logo1.png';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

import './Display.scss';

function Display() {
    return (
        <section className='Display'>
            <div className="Display__container">
                <div className='Display__title'>
                    <h1>Alguns dos nossos <span>Aumigos</span> disponíveis.</h1>
                    <img src={logo} alt="logo-icon" />
                </div>
                <div>

                </div>
                <Carousel responsive={responsive} className='Display__Cards' centerMode={true}>
                    {
                        pets.map((pet: any) => {
                            return (
                                <div className='Display__card' key={pet.name}>
                                    <div className='Card__top'>
                                        <img src={pet.image} alt={pet.name} />
                                        <h4>{pet.name}  </h4>
                                    </div>
                                    <div className='Card__bottom'>
                                        <p>Idade: <span>{pet.age} anos</span></p>
                                        <p>Sexo: <span>{pet.gender}</span></p>
                                        <p>Peso: <span>{pet.weight} kg</span></p>
                                        <p>Tamanho: <span>{pet.size}</span></p>
                                        <p>Raça: <span>{pet.breed}</span></p>
                                        <button>Saber mais</button>
                                    </div>

                                </div>
                            )
                        })
                    }
                </Carousel>

                <button className='Display__more'> Ver mais </button>
            </div>
        </section>
    )
}

export default Display
