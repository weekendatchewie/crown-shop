import "./form-input.styles.scss";

function FormInput({label, ...otherProps}) {
    return (
        <div className="group">

            <input className={`${otherProps.value.length ? 'input-complete' : ""} form-input`} {...otherProps} />

            {label &&
                <label className={`${otherProps.value.length ? 'shrink' : ""} form-input-label`}>
                    {label}
                </label>
            }
        </div>
    );
}

export default FormInput;