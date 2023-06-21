import './Login.scss'
import newRequest from '../../utils/newRequest.js'

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
function Login() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        console.log("aqui")
        try {
            const response = await newRequest.post("/auth/login", {
                email,
                password
            })
            console.log(response)
            localStorage.setItem("currentUser", JSON.stringify(response.data));
            navigate('/');

        } catch (error: any) {
            setError(error.response.data.message);
        }
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
                    <form>
                        <div className='input__group'>
                            <input
                                autoComplete='off'
                                placeholder=' '
                                name="email"
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label htmlFor="">Email:</label>
                        </div>
                        <div className='input__group'>
                            <input
                                autoComplete='off'
                                placeholder=' '
                                name="password"
                                type="password"
                                onChange={(e) => setPassword(e.target.value)} />
                            <label htmlFor="">Senha:</label>
                        </div>

                    </form>
                    <button className='Login-btn' type='submit' onClick={handleSubmit}> Entrar </button>
                    {
                        error && <p className='error'>{error}</p>
                    }
                </div>
            </div>
            <div className='spacer main__footer' />
        </div>
    )
}

export default Login
