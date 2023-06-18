
import './Adopt.scss'
import pets from '../../data.json';
import Hero1 from "../../assets/hero1.png"
import adopt1 from "../../assets/adopt1.png"
import adopt2 from "../../assets/adopt2.png"
import adopt3 from "../../assets/adopt3.png"
import adopt4 from "../../assets/adopt4.png"

import { useState, useEffect } from 'react';
function Adopt() {

    const [petsData, setPetsData] = useState([])

    useEffect(() => {
        setPetsData(pets as any)
    }, [])

    const optionsAge = ["Todos", "Menor a 1 ano", "Entre 1 e 3 anos", "Entre 3 e 5 anos", "Maior a 5 anos"]
    const optionsSize = ["Todos", "Pequeno", "Médio", "Grande"]

    const handleLocation = (e: any) => {
        console.log(e.target.value)
    }
    const handleSpecies = (e: any) => {
        if (e.target.value === "Todos") {
            setPetsData(pets as any)
        } else {
            const filterPets = pets.filter((pet) => {
                return pet.species === e.target.value
            })
            setPetsData(filterPets as any)
        }
    }

    const handleSize = (e: any) => {
        if (e.target.value === "Todos") {
            setPetsData(pets as any)
        } else {
            const filterPets = pets.filter((pet) => {
                return pet.size === e.target.value
            })
            setPetsData(filterPets as any)
        }
    }

    
    const handleAge = (e: any) => {
        const value = e.target.value
        console.log(value)
        if (value === "Todos") {
            setPetsData(pets as any)
        } else if (value === "Menor a 1 ano") {
            const filterPets = pets.filter((pet) => {
                return pet.age <= 1
            })
            setPetsData(filterPets as any)
        } else if (value === "Entre 1 e 3 anos") {
            const filterPets = pets.filter((pet) => {
                return pet.age >= 1 && pet.age <= 3
            })
            setPetsData(filterPets as any)
        } else if (value === "Entre 3 e 5 anos") {
            const filterPets = pets.filter((pet) => {
                return pet.age >= 3 && pet.age <= 5
            })
            setPetsData(filterPets as any)
        } else if (value === "Maior a 5 anos") {
            const filterPets = pets.filter((pet) => {
                return pet.age >= 1
            })
            setPetsData(filterPets as any)
        }else{
            setPetsData(pets as any)
        }
    }


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
                            <label htmlFor="">Localização</label>
                            <input type="text" placeholder="Pesquisar" onChange={handleLocation} />
                        </div>
                        <div className="Adopt__content__filters__search">
                            <label htmlFor="">Especie</label>
                            <select name="species" id="species" onChange={handleSpecies}>
                                <option value="Todos">Todos</option>
                                <option value="cachorro">Cachorro</option>
                                <option value="gato">Gato</option>
                            </select>
                        </div>
                        <div className="Adopt__content__filters__search">
                            <label htmlFor="">Idade</label>
                            <select name="age" id="age" onChange={handleAge}>
                                {optionsAge.map((option, index) => {
                                    return <option key={index} value={option}>{option}</option>
                                }
                                )}
                            </select>
                        </div>
                        <div className="Adopt__content__filters__search">
                            <label htmlFor="">Tamanho</label>
                            <select name="size" id="size" onChange={handleSize}>
                                {optionsSize.map((option, index) => {
                                    return <option key={index} value={option}>{option}</option>
                                }
                                )}
                            </select>
                        </div>
                    </div>
                    <div className="Adopt__content__cards">
                        {petsData.map((pet: any) => {
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
