import './Register.scss'
function Register() {

    const handleChange = () => {
        console.log("aqui")
    }
    return (
        <div className="Register">
            <div className="Register__container">
                <div className="Register__container-left">
                    <h1>adotePet</h1>
                    <p>Encontre seu companheiro de quatro patas no adotePet! Milhares de animais esperam por um lar amoroso. Adote um pet hoje mesmo e transforme uma vida. Seja parte dessa incrível jornada de amor e alegria. Visite adotePet agora!</p>
                </div>
                <div className="Register__container-right">
                    <h1>Nova conta:</h1>
                    <form action="POST">
                        <div className='input__group'>
                            <input
                                autoComplete='off'
                                placeholder=' '
                                name="username"
                                type="text"
                                onChange={handleChange}
                            />
                            <label htmlFor="username">Nome:</label>
                        </div>
                        <div className='input__group'>
                            <input
                                autoComplete='off'
                                placeholder=' '
                                name="email"
                                type="email"
                                onChange={handleChange}
                            />
                            <label htmlFor="">Email:</label>
                        </div>
                        <div className='input__group'>
                            <input
                                autoComplete='off'
                                placeholder=' '
                                name="password"
                                type="password"
                                onChange={handleChange} />
                            <label htmlFor="">Senha:</label>
                        </div>
                        <div className='input__group'>
                            <input
                                autoComplete='off'
                                placeholder=' '
                                name="confirm-password"
                                type="password"
                                onChange={handleChange} />
                            <label htmlFor="confirm-password">Confirmar senha:</label>
                        </div>
                    </form>
                    <button className='Register-btn'> Cadastrar </button>
                </div>
            </div>
        </div>
    )
}

export default Register
