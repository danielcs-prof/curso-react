import { Button } from "../../../components/buttons/Button";
import { Input } from "../../../components/inputs/Input";

export function CursoForm(){
    return (
        <>
            <div className="row">
                <div className="col-4">
                    <Input
                        id="txtNomeCurso"
                        type="text"
                        
                    />
                </div>
            </div>
        </>
    );
}