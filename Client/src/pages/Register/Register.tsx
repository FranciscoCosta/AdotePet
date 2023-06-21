import './Register.scss';
import { useState } from 'react';
import newRequest from '../../utils/newRequest.js';

import { useNavigate } from 'react-router';

function Register() {

    const [name, setname] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [error, setError] = useState<string>('');


    const navigate = useNavigate();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const inputVerified =await verifyInputs();
        if (inputVerified) {
            try {
                const response = await newRequest.post('/auth/register', { name, email, password });
                if (response.status === 201) {
                    navigate('/login');
                }
            } catch (err : any) {
                console.log(err)
                setError(err.response.data.message);
            }
        }
    }

    const verifyInputs = async () => {
        setError('');
        if (!name || !email || !password) {
            setError('Preencha todos os campos');
            return false;
        }
        if (password.length < 6) {
            setError('A senha deve ter no mínimo 6 caracteres');
            return false;
        }
        if (password !== confirmPassword) {
            setError('As senhas não coincidem');
            return false;
        }
        if (!email.includes('@')) {
            setError('Email inválido');
            return false;
        }
        return true;
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
                    <form>
                        <div className='input__group'>
                            <input
                                autoComplete='off'
                                placeholder=' '
                                name="name"
                                type="text"
                                onChange={(e) => setname(e.target.value)}
                            />
                            <label htmlFor="username">Nome:</label>
                        </div>
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
                        <div className='input__group'>
                            <input
                                autoComplete='off'
                                placeholder=' '
                                name="confirm-password"
                                type="password"
                                onChange={(e) => setConfirmPassword(e.target.value)} />
                            <label htmlFor="confirm-password">Confirmar senha:</label>
                        </div>
                    </form>

                    <button className='Register-btn' onClick={handleSubmit}> Cadastrar </button>
                    {
                        error && <p className='error'>{error}</p>
                    }
                </div>
            </div>
            <div className='spacer main__footer' />
        </div>
    )
}

export default Register
