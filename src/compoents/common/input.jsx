import React, { Component } from "react";

class Input extends Component {
  render() {
    const { name, label, value, type, onChange } = this.props;

    return (
      <div className="form-group m-4">
        <label htmlFor={name}>{label}</label>
        <input
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          type={type}
          className="form-control"
        />
      </div>
    );
  }
}

export default Input;
