import './Pets.scss'
import { useState } from 'react'

import { FaTrash, FaEdit } from 'react-icons/fa';


function Pets() {

  const colors = [
    "Preto",
    "Branco",
    "Marrom",
    "Cinza",
    "Laranja",
    "Amarelo",
    "Caramelo",
    "Verde",
    "Azul",
    "Roxo",
  ];

  const species = [
    "Cachorro",
    "Gato",
    "Pássaro",
    "Roedor",
    "Réptil",
    "Outro",
  ];

  const sizes = [
    "Pequeno",
    "Médio",
    "Grande",
  ];

  const status = [
    "Disponível",
    "Adotado"
  ]

  const [petsUser, setpetsUser] = useState([])
  const [modalAdd, setmodalAdd] = useState(false)
  const [modalEdit, setmodalEdit] = useState(false)

  const handleEddit = () => {
    setmodalEdit(true)
  }


  const handleRemove = () => {
    console.log('remove')
  }
  const handleAdd = () => {
    setmodalAdd(true)
  }
  const handleAddStay = (event) => {
    event.stopPropagation();
  }

  const handleEditClose = (event) => {
    event.stopPropagation();
    setmodalEdit(false);
  }

  const handleAddClose = (event) => {
    event.stopPropagation();
    setmodalAdd(false);
  }

  return (
    <div className='Pets'>
      <div className="Pets__container">
        {
          petsUser === null ? <h3>
            Não possui pets adicionados.
          </h3> :
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Imagem</th>
                  <th>Idade</th>
                  <th>Sexo</th>
                  <th>Porte</th>
                  <th>Editar</th>
                  <th>Remover</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Simba</td>
                  <td>
                    <img src="https://images.pexels.com/photos/998251/pexels-photo-998251.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                  </td>
                  <td>5</td>
                  <td>Macho</td>
                  <td>Grande</td>
                  <td ><FaEdit className='edit' onClick={handleEddit} /></td>
                  <td ><FaTrash className='remove' onClick={handleRemove} /></td>
                </tr>
                <tr>
                  <td>Thor</td>
                  <td>
                    <img src="https://images.pexels.com/photos/16217948/pexels-photo-16217948/free-photo-of-animal-bicho-cachorro-cao.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                  </td>
                  <td>3</td>
                  <td>Macho</td>
                  <td>Médio</td>
                  <td ><FaEdit className='edit' onClick={handleEddit} /></td>
                  <td ><FaTrash className='remove' onClick={handleRemove} /></td>
                </tr>
              </tbody>
            </table>
        }
        <button className='add' type='button' onClick={handleAdd}>
          Adicionar
        </button>
      </div>
      {modalAdd && <div className='modal__add' onClick={handleAddClose}>
        <div className="modal__container" onClick={handleAddStay}>
          <form action="">
            <div className="modal__left">
              <h1>Doar Pet</h1>
              <div className="input__group">
                <input type="text" />
                <label htmlFor="">Nome</label>
              </div>
              <div className="input__group">
                <input type="number" />
                <label htmlFor="">Idade</label>
              </div>
              <div className="input__group">
                <input type="text" />
                <label htmlFor="">Peso</label>
              </div>
              <div className="input__group">
                <input type="text" />
                <label htmlFor="">Raça</label>
              </div>
              <div className="input__group">
                <input type="number" />
                <label htmlFor="">Cep</label>
              </div>
              <div className="input__group">
                <input type="file" />
                <label htmlFor="">Image</label>
              </div>

            </div>
            <div className="modal__right">
              <div className="modal__right-bottom">
                <div className="select_info">
                  <label htmlFor="">Espécie</label>
                  <select name="" id="">
                    <option value="">Selecione</option>
                    {species.map((species) => (
                      <option value={species}>{species}</option>
                    ))}
                  </select>
                </div>
                <div className="select_info">
                  <label htmlFor="">Cor</label>
                  <select name="" id="">
                    <option value="">Selecione</option>
                    {colors.map((color) => (
                      <option value={color}>{color}</option>
                    ))}
                  </select>
                </div>

                <div className="select_info">
                  <label htmlFor="">Porte</label>
                  <select name="" id="">
                    <option value="">Selecione</option>
                    {sizes.map((size) => (
                      <option value={size}>{size}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="modal__right-top">
                <div className="select_info">
                  <label htmlFor="">Descrição</label>
                  <textarea name="" id="" cols={30} rows={10}></textarea>
                </div>
                <button>Adicionar</button>
              </div>
            </div>

          </form>
        </div>

      </div >
      }
      {modalEdit && <div className='modal__edit' onClick={handleEditClose}>
        <div className="modal__container" onClick={handleAddStay}>
          <form action="">
            <div className="modal__left">
              <h1>Editar Pet</h1>
              <div className="input__group">
                <input type="text" />
                <label htmlFor="">Nome</label>
              </div>
              <div className="input__group">
                <input type="number" />
                <label htmlFor="">Idade</label>
              </div>
              <div className="input__group">
                <input type="text" />
                <label htmlFor="">Peso</label>
              </div>
              <div className="input__group">
                <input type="text" />
                <label htmlFor="">Raça</label>
              </div>
              <div className="input__group">
                <input type="number" />
                <label htmlFor="">Cep</label>
              </div>
              <div className="input__group">
                <input type="file" />
                <label htmlFor="">Image</label>
              </div>

            </div>
            <div className="modal__right">
              <div className="modal__right-bottom">
                <div className="select_info">
                  <label htmlFor="">Espécie</label>
                  <select name="" id="">
                    <option value="">Selecione</option>
                    {species.map((species) => (
                      <option value={species}>{species}</option>
                    ))}
                  </select>
                </div>
                <div className="select_info">
                  <label htmlFor="">Cor</label>
                  <select name="" id="">
                    <option value="">Selecione</option>
                    {colors.map((color) => (
                      <option value={color}>{color}</option>
                    ))}
                  </select>
                </div>

                <div className="select_info">
                  <label htmlFor="">Porte</label>
                  <select name="" id="">
                    <option value="">Selecione</option>
                    {sizes.map((size) => (
                      <option value={size}>{size}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="modal__right-top">
                <div className="select_info">
                  <label htmlFor="">Descrição</label>
                  <textarea name="" id="" cols={30} rows={10}></textarea>
                </div>
                <button>Adicionar</button>
              </div>
            </div>

          </form>
        </div>

      </div >
      }
      <div className='spacer main__footer' />
    </div >
  )
}

export default Pets
