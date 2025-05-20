import React, { useState } from 'react';
import { Input } from '../../../components/inputs/Input';
import logo from '/src//assets/logo.png'
import { Button } from '../../../components/buttons/Button';

export function Autenticar() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return (
        <div className="bg-light d-flex justify-content-center align-items-center vh-100" style={{backgroundColor: '#2B3035'}} >
            <div className="card p-4 shadow" style={{ maxWidth: '500px', width: '100%', borderRadius: '12px' }}>
                <div className="d-flex justify-content-center">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill=" #66757F" class="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                    </svg> */}

                    <img src={logo} className='img-fluid w-75' />
                </div>
                <hr />
                {/* <div className="d-flex justify-content-between mb-3">
                    <button className="btn btn-light border w-100 me-2">
                        <img src="https://img.icons8.com/color/24/000000/google-logo.png" alt="Google" />
                    </button>
                    <button className="btn btn-primary w-100 me-2">
                        <i className="bi bi-facebook"></i>
                    </button>
                    <button className="btn btn-dark w-100">
                        <i className="bi bi-github"></i>
                    </button>
                </div> */}
                {/* <p className="text-center">ou</p> */}
                <Input
                    id="idEmail"
                    type="email"
                    label="E-mail"
                    placeholder="Digite seu e-mail ..."
                    variant="form-floating"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value.toLowerCase()) }}
                /><Input
                    id="idSenha"
                    type="password"
                    label="Senha"
                    placeholder="Digite a senha ..."
                    variant="form-floating"
                    value={senha}
                    onChange={(e) => { setSenha(e.target.value) }}
                />
                <br />
                <a href="#" className="text-end">Esqueceu a senha?</a>
                <br />
                <div className="d-grid grap2 ">
                    <Button id="btnEntrar" text="Entrar" />
                    <Button id="btnEntrar" text="Cadastra-se aqui" variant='warning mt-2' />
                </div>
                <hr />
                <p className='text-center'>Crie sua conta com</p>
                <div className="d-flex justify-content-between mb-3">
                    <button className="btn btn-danger border w-100 me-2">
                        <i class="bi bi-google"></i>
                    </button>
                    <button className="btn btn-primary w-100 me-2">
                        <i className="bi bi-facebook"></i>
                    </button>
                    <button className="btn btn-dark w-100">
                        <i className="bi bi-github"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}
