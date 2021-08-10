import * as IconBS from "react-icons/fa"

const InputField = ({ value, label, name, placeholder, type, onChange }) => (
  <div className="form-group">
    <div className="row mb-4">
    <div className="col-3">
      <label htmlFor="input-field" className="col-form-label">{label}</label>
    </div>
    <div className="col input-group">
      <span className="input-group-text"><IconBS.FaEtsy /></span>
      <input
        type={type}
        value={value}
        name={name}
        className="form-control"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div> 
  </div>
  </div>
);

export default InputField;