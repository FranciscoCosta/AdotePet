import './Login.scss'
function Login() {

    const handleChange = () => {
        console.log("aqui")
    }
    return (
        <div className="Login">
            <div className="Login__container">
                <div className="Login__container-left">
                    <h1>adotePet</h1>
                    <p>Encontre seu companheiro de quatro patas no adotePet! Milhares de animais esperam por um lar amoroso. Adote um pet hoje mesmo e transforme uma vida. Seja parte dessa incrível jornada de amor e alegria. Visite adotePet agora!</p>
                </div>
                <div className="Login__container-right">
                    <h1>Login:</h1>
                    <form action="POST">
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
                    </form>
                    <button className='Login-btn'> Entrar </button>
                </div>
            </div>
            <div className='spacer main__footer'/>
        </div>
    )
}

export default Login
