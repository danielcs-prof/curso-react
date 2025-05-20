export function Button({
    text,
    type = "button",
    variant = "primary",
    size = "md",
    disabled = false,
    loading = false,
    onClick,
    icone,
    isModal = false,
    dataBsTarget = ""
}) {
    return (
        <button
            type={type}
            className={`btn btn-${variant} btn-${size} w-100`}
            disabled={disabled || loading}
            onClick={!isModal ? onClick : undefined}
            {...(isModal && {
                'data-bs-toggle': 'modal',
                'data-bs-target': `#${dataBsTarget}`
            })}
        >
            {loading ? (
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
            ) : (
                icone && <i className={`bi bi-${icone} me-1`}></i>
            )}
            {text}
        </button>
    );
}
