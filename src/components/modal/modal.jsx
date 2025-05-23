export function Modal({
    id,
    title,
    body,
    onClick,
    btnSalvar = 'Salvar',
    btnCancelar = 'Cancelar'
}) {
    return (
        <div className="modal fade" id={id} tabIndex="-1" aria-labelledby={`${id}Label`} aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">

                    <div className="modal-header">
                        <h5 className="modal-title" id={`${id}Label`}>{title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
                    </div>

                    <div className="modal-body">
                        {body}
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                            {btnCancelar}
                        </button>
                        <button type="button" className="btn btn-primary" onClick={onClick} data-bs-dismiss="modal">
                            {btnSalvar}
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}
