import './Hero.scss'
import Hero1 from "../../assets/hero1.png"
import Hero2 from "../../assets/hero2.png"
import Hero3 from "../../assets/hero3.png"
import Arrow from "../../assets/arrow.png"
import { useState } from 'react'


function Hero() {

    const [activeStep, setActiveStep] = useState(1);

    const handleBoxHover = (id: number) => {
        setActiveStep(id);
    };

    let heroImageSrc = "";
    if (activeStep === 1) {
        heroImageSrc = Hero1;
    } else if (activeStep === 2) {
        heroImageSrc = Hero2;
    } else if (activeStep === 3) {
        heroImageSrc = Hero3;
    }
    return (
        <section className="Hero">
            <div className="Hero__left">
                <h1>Adotar um <span>Pet</span> nunca foi tão <span>fácil</span>.</h1>
                <p>Encontre seu companheiro de quatro patas no <span>adotePet</span>! Milhares de animais esperam por um lar amoroso.</p>
                <button>Começar</button>
                <img src={Arrow} alt="arrow-icon" />
            </div>
            <div className="Hero__center">
                <img src={heroImageSrc} alt="hero-img" />
            </div>
            <div className="Hero__right">
                <div className={`Hero__steps ${activeStep === 1 ? "active" : ""}`} onMouseEnter={() => handleBoxHover(1)}>
                    <h3>Escolher</h3>
                    <p>Escolha o seu amigo entre milhares.</p>
                </div>
                <div className={`Hero__steps ${activeStep === 2 ? "active" : ""}`} onMouseEnter={() => handleBoxHover(2)}>
                    <h3>Conversar</h3>
                    <p>Saiba mais sobre seu novo amigo.</p>
                </div>
                <div className={`Hero__steps ${activeStep === 3 ? "active" : ""}`} onMouseEnter={() => handleBoxHover(3)}>
                    <h3>Adotar</h3>
                    <p>Seja feliz com o seu novo companheiro.</p>
                </div>

            </div>
        </section>
    )
}

export default Hero
