const FormField = ({ type, name, placeholder, id, className, autoComplete, required }) => (
  <>
    <label htmlFor={id} className="visually-hidden">
      {placeholder}
    </label>
    {type === "textarea" ? (
      <textarea
        name={name}
        placeholder={placeholder}
        id={id}
        className={className}
        required={required}
      />
    ) : (
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        id={id}
        className={className}
        autoComplete={autoComplete}
        required={required}
      />
    )}
  </>
);

export default FormField;
