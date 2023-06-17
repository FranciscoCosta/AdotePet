
import './Adopt.scss'
import pets from '../../data.json';
import Hero1 from "../../assets/hero1.png"
import adopt1 from "../../assets/adopt1.png"
import adopt2 from "../../assets/adopt2.png"
import adopt3 from "../../assets/adopt3.png"
import adopt4 from "../../assets/adopt4.png"
function Adopt() {

    const optionsAge = ["Menor a 1 ano", "Entre 1 e 3 anos", "Entre 3 e 5 anos", "Maior a 5 anos"]
    const optionsSize = ["Pequeno", "Médio", "Grande"]
    return (
        <div className='Adopt'>
            <div className="Adopt__hero">
                <div className="Adopt__hero__center">
                    <img src={Hero1} alt="" />
                    <h1>Escolha o seu <span>Aumigo</span>.</h1>
                    <div className='Adopt__hero-top-left'>
                        <img src={adopt1} alt="" />
                    </div>
                    <div className='Adopt__hero-top-right'>
                        <img src={adopt4} alt="" />
                    </div>
                    <div className='Adopt__hero-bottom-left'>
                        <img src={adopt3} alt="" />
                    </div>
                    <div className='Adopt__hero-bottom-right'>
                        <img src={adopt2} alt="" />
                    </div>
                </div>

            </div>
            <div className="spacer hero__display" />
            <div className="Adopt__content">
                <div className="Adopt__content__filters">
                    <div className="Adopt__content__filters__search">
                        <input type="text" placeholder="Pesquisar" />
                    </div>
                    <div className="Adopt__content__filters__select">
                        <select name="species" id="species">
                            <option value="Cachorro">Cachorro</option>
                            <option value="Gato">Gato</option>
                        </select>
                    </div>
                    <div className="Adopt__content__filters__age">
                        <select name="age" id="age">
                            {optionsAge.map((option, index) => {
                                return <option key={index} value={option}>{option}</option>
                            }
                            )}
                        </select>
                    </div>
                    <div className="Adopt__content__filters__size">
                        <select name="size" id="size">
                            {optionsSize.map((option, index) => {
                                return <option key={index} value={option}>{option}</option>
                            }
                            )}
                        </select>
                    </div>
                </div>
                <div className="Adopt__content__cards">
                    {pets.map((pet: any) => {
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
                    }
                    )}
                </div>
            </div>
            <div className="spacer display__footer"></div>
        </div>
    )
}

export default Adopt
