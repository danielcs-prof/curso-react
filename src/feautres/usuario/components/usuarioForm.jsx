import { Input } from "../../../components/inputs/Input"
import { Button } from "../../../components/buttons/Button";
import { useState } from "react";
import { formatarCelular } from "./mask";
import { verificarRequisitosSenha } from "./mask";

export function UsuarioForm(
    {
        titulo = ""
    }
) {
    const [usuario, setUsuario] = useState({ nome: "", email: "", senha: "", celular: "" })
    const [errosSenha, setErrosSenha] = useState([]);
    const [senhaTocada, setSenhaTocada] = useState(false);
    const [confirmaSenha, setConfirmaSenha] = useState("")

    return (
        <>
            <div className="card p-4 rounded-3 shadow mt-4 ">
                <h4>{titulo}</h4>
                <hr />
                <form onSubmit="">
                    <Input
                        id="idNome"
                        type="text"
                        label="Nome completo"
                        placeholder="Digite seu nome ..."
                        variant="form-floating"
                        value={usuario.nome}
                        onChange={(e) => { setUsuario({ ...usuario, nome: e.target.value.toUpperCase() }) }}
                    />
                    <Input
                        id="idEmail"
                        type="email"
                        label="E-mail"
                        placeholder="Digite seu e-mail ..."
                        variant="form-floating"
                        value={usuario.email}
                        onChange={(e) => { setUsuario({ ...usuario, email: e.target.value.toLowerCase() }) }}
                    />
                    <Input
                        id="idCelular"
                        type="text"
                        label="Celular"
                        placeholder="Digite seu celular ..."
                        variant="form-floating"
                        value={usuario.celular}
                        onChange={(e) => {
                            const celularFormatado = formatarCelular(e.target.value)
                            setUsuario({ ...usuario, celular: celularFormatado })
                        }}
                    />
                    <Input
                        id="idSenha"
                        type="password"
                        label="Senha"
                        placeholder="Digite a senha ..."
                        variant="form-floating"
                        value={usuario.senha}
                        onChange={(e) => {
                            const novaSenha = e.target.value;
                            setUsuario({ ...usuario, senha: novaSenha });

                            if (!senhaTocada)
                                setSenhaTocada(true);

                            const erros = verificarRequisitosSenha(novaSenha);
                            setErrosSenha(erros);
                        }}
                    />
                    {senhaTocada && errosSenha.length > 0 && (
                        <div className="mt-2">
                            {errosSenha.map((erro, index) => (
                                <ul>
                                    <li key={index} className="text-danger mb-1">{erro}</li>
                                </ul >
                            ))}
                        </div>
                    )}


                    <Input
                        id="idConfirmaSenha"
                        type="password"
                        label="Confirma senha"
                        placeholder="Confirma a senha ..."
                        variant="form-floating"
                        value={confirmaSenha}
                        onChange={(e) => { setConfirmaSenha(e.target.value) }}
                    />
                    {usuario.senha && confirmaSenha && usuario.senha !== confirmaSenha && (
                        <p className="text-danger mt-2">As senhas não coincidem.</p>
                    )}
                </form>
                <hr />
                <div className="mt-4">
                    <Button id="btnEntrar" text="Salvar" />
                </div>
            </div>

        </>
    );
}