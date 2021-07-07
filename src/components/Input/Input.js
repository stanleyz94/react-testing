import PropTypes from 'prop-types';

const Input = (props) => {
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <input
        value={props.value}
        type={props.type}
        className={`form-control  ${
          props.isValid && props.showError ? 'is-invalid' : ''
        }`}
        onChange={(e) => props.onChange(e.target.value)}
      />
      <div className="invalid-feedback">Błąd</div>
    </div>
  );
};
// jak type nie zostanie podany chce uzyc 'text
Input.defaultProps = {
  type: 'text',
  isValid: false,
  showError: false,
};

export default Input;
