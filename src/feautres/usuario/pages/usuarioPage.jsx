import {UsuarioForm} from "../components/usuarioForm";

export function UsuarioPages(){
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <UsuarioForm titulo="Perfil"/>
                </div>
            </div>
        </div>
        </>
    );
}