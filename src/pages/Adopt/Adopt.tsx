import React, { useState, useEffect } from 'react';
import { GiCrossedBones } from 'react-icons/gi';


GiCrossedBones
import './Adopt.scss';
import pets from '../../data.json';
import Hero1 from "../../assets/hero1.png"
import adopt1 from "../../assets/adopt1.png"
import adopt2 from "../../assets/adopt2.png"
import adopt3 from "../../assets/adopt3.png"
import adopt4 from "../../assets/adopt4.png"

function Adopt() {
  const [petsData, setPetsData] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [showpet, setShowpet] = useState({});

  useEffect(() => {
    setPetsData(pets);
  }, []);

  const optionsAge = ["Todos", "Menor a 1 ano", "Entre 1 e 3 anos", "Entre 3 e 5 anos", "Maior a 5 anos"];
  const optionsSize = ["Todos", "Pequeno", "Médio", "Grande"];

  const handleLocation = (e) => {
    console.log(e.target.value);
  };

  const handlePetInfo = (event, pet) => {
    event.stopPropagation();
    setDialogOpen(true);
    setShowpet(pet);
  }

  const handleBtnClose = (event) => {
    event.stopPropagation();
    setDialogOpen(false);
  }



  const handleSpecies = (e) => {
    if (e.target.value === "Todos") {
      setPetsData(pets);
    } else {
      const filterPets = pets.filter((pet) => {
        return pet.species === e.target.value;
      });
      setPetsData(filterPets);
    }
  };

  const handleSize = (e) => {
    if (e.target.value === "Todos") {
      setPetsData(pets);
    } else {
      const filterPets = pets.filter((pet) => {
        return pet.size === e.target.value;
      });
      setPetsData(filterPets);
    }
  };

  const handleAge = (e) => {
    const value = e.target.value;
    console.log(value);
    if (value === "Todos") {
      setPetsData(pets);
    } else if (value === "Menor a 1 ano") {
      const filterPets = pets.filter((pet) => {
        return pet.age <= 1;
      });
      setPetsData(filterPets);
    } else if (value === "Entre 1 e 3 anos") {
      const filterPets = pets.filter((pet) => {
        return pet.age >= 1 && pet.age <= 3;
      });
      setPetsData(filterPets);
    } else if (value === "Entre 3 e 5 anos") {
      const filterPets = pets.filter((pet) => {
        return pet.age >= 3 && pet.age <= 5;
      });
      setPetsData(filterPets);
    } else if (value === "Maior a 5 anos") {
      const filterPets = pets.filter((pet) => {
        return pet.age >= 5;
      });
      setPetsData(filterPets);
    } else {
      setPetsData(pets);
    }
  };

  const openDialog = () => {
    setDialogOpen(true);
    setShowpet(pet)
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div className="Adopt">
      <div className="Adopt__hero">
        <div className="Adopt__hero__center">
          <img src={Hero1} alt="" />
          <h1>
            Escolha o seu <span>Aumigo</span>.
          </h1>
          <div className="Adopt__hero-top-left">
            <img src={adopt1} alt="" />
          </div>
          <div className="Adopt__hero-top-right">
            <img src={adopt4} alt="" />
          </div>
          <div className="Adopt__hero-bottom-left">
            <img src={adopt3} alt="" />
          </div>
          <div className="Adopt__hero-bottom-right">
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
              {optionsAge.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="Adopt__content__filters__search">
            <label htmlFor="">Tamanho</label>
            <select name="size" id="size" onChange={handleSize}>
              {optionsSize.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="Adopt__content__cards">
          {petsData.map((pet) => (
            <div className="Display__card" key={pet.name}>
              <div className="Card__top">
                <img src={pet.image} alt={pet.name} />
                <h4>{pet.name}</h4>
              </div>
              <div className="Card__bottom">
                <p>
                  Idade: <span>{pet.age} anos</span>
                </p>
                <p>
                  Sexo: <span>{pet.gender}</span>
                </p>
                <p>
                  Peso: <span>{pet.weight} kg</span>
                </p>
                <p>
                  Tamanho: <span>{pet.size}</span>
                </p>
                <p>
                  Raça: <span>{pet.breed}</span>
                </p>
                <button onClick={(e) => handlePetInfo(e, pet)}>Saber mais</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="spacer display__footer"></div>

      {dialogOpen &&
        <div className='Modal' onClick={closeDialog} >

          <div className='Modal__pet_display' onClick={()=>console.log('a')}>
            <div className='Modal__pet-left'>
              <h4>{showpet.name}</h4>
              <img src={showpet.image} alt={showpet.name} />
                <span
                 style={{backgroundColor: showpet.status === 'Disponível' ? '#2fc18c' : '#ff9600'}}
                >{showpet.status}</span>

 
            </div>
            <div className='Modal__pet-right'>

            <p>
              Raça: <span>{showpet.breed}</span>
              </p>
              <p>
                Idade: <span>{showpet.age} anos</span>
              </p>
                <p>
                  Peso : <span>{showpet.weight} kg</span>
                </p>
              <p>
                Tamanho: <span>{showpet.size}</span>
              </p>
              <p>
                Cor: <span>{showpet.color}</span>
              </p>
              <p>
              Gênero: <span>{showpet.gender}</span>
              </p>
              <p>
                <span>Descrição:</span> {showpet.description}
              </p>
              <p>
                <span>Localização:</span> {showpet.city} / {showpet.state} / {showpet.neighborhood}
              </p>
              <button>
                Entrar em contato
              </button>
              </div>
              <GiCrossedBones onClick ={(e)=> handleBtnClose(e)}/>
          </div>

        </div>
      }
    </div>
  );
}

export default Adopt;
