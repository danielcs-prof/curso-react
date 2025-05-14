import React from 'react';

export default function ModalComponent(
    {
        id,
        titulo,
        corpo,
        onConfirmar,
        textoBotao = 'Salvar'
    }) {
    return (
        <div className="modal-dialog modal-dialog-scrollable" id={id} tabIndex="-1" aria-labelledby={`${id}Label`} aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">

                    <div className="modal-header">
                        <h5 className="modal-title" id={`${id}Label`}>{titulo}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
                    </div>

                    <div className="modal-body">
                        {corpo}
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" className="btn btn-primary" onClick={onConfirmar} data-bs-dismiss="modal">
                            {textoBotao}
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}
