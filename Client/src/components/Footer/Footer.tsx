import './Footer.scss'
import { BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs'

function Footer() {
  return (
    <div className='Footer'>
      <div className='Footer__left'>
        <div className='Footer__title'>
          <h1>AdotePet</h1>
          <div className='Footer_line' />
        </div>
        <h3>Sobre nós</h3>
        <h3>Política de privacidade</h3>
        <h3>Termos de uso</h3>
        <h3>FAQ</h3>
      </div>
      <div className='Footer__center'>
        <div className='Footer__title'>
          <h1>Contato</h1>
          <div className='Footer_line' />
        </div>
        <h3>Email: francisco100eg@gmail.com</h3>
        <h3>Telefone: (11) 99999-9999</h3>
        <h3>Endereço: Rua dos Bobos 103</h3>
      </div>
      <div className='Footer__right'>
        <div className='Footer__title'>
          <h1>Redes sociais</h1>
          <div className='Footer_line' />
        </div>
        <div className="Footer__social">
          <div className='Footer_svg'>
            <BsLinkedin
              style={{ cursor: "pointer" }}
              onClick={() => {
                window.open("https://www.linkedin.com/in/francisco-costa-dev/", "_blank");
              }} />
          </div>
          <div className='Footer_svg'>
            <BsGithub
              style={{ cursor: "pointer" }}
              onClick={() => {
                window.open("https://github.com/FranciscoCosta", "_blank");
              }}
            />
          </div>
          <div className='Footer_svg'>
            <BsInstagram
              style={{ cursor: "pointer" }}
              onClick={() => {
                window.open("https://www.instagram.com/tuga_no_brasil/", "_blank");
              }} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer
