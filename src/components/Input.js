export const Input = ({ label, value, onChange, placeholder, required }) => {
    return <div className="Field">
        <label>
            {label}{/* TODO [NOT MVP: Only English now] Store this text in db for future language selection */}
            <sup hidden={required != "required"}>*</sup>
        </label>
        <input
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    </div>
}