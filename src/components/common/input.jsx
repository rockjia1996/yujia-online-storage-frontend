import React, { Component } from "react";

class Input extends Component {
  render() {
    const { name, label, value, type, onChange, error, placeholder } =
      this.props;

    return (
      <div className="form-group my-4">
        <label htmlFor={name}>{label}</label>
        <input
          className="form-control"
          type={type}
          value={value}
          id={name}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    );
  }
}

export default Input;
