import React, { Component } from "react";

class Input extends Component {
  render() {
    const { name, label, value, type, onChange } = this.props;

    return (
      <div className="form-group m-4">
        <label htmlFor={name}>{label}</label>
        <input
          className="form-control"
          type={type}
          value={value}
          id={name}
          name={name}
          onChange={onChange}
        />
      </div>
    );
  }
}

export default Input;
