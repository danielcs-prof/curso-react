export function Input({
  id,
  type = 'text',
  label,
  value,
  onChange,
  placeholder = "",
  required = false,
  disabled = false,
  variant
}) {
  const isFloating = variant === "form-floating";

  return (
    <div className={isFloating ? 'form-floating mt-2' : 'mb-1'}>

      {/* fora do form-floating, label separado */}
      {!isFloating && label && (
        <label className="form-label mt-1" htmlFor={id}>{label}</label>
      )}
      
      <input
        id={id}
        type={type}
        className="form-control form-control-sm"
        placeholder={isFloating ? placeholder || label : placeholder} // necessário para form-floating
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
      />
      
      {/* label só dentro do form-floating */}
      {isFloating && (
        <label htmlFor={id}>{label}</label>
      )}
      
    </div>
  );
}

      