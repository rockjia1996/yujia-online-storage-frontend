import React, { Component } from "react";

class SearchBar extends Component {
  state = {};
  render() {
    const { value, onChange } = this.props;
    return (
      <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          value={value}
          onChange={onChange}
        />
        <button className="btn btn-outline-primary " type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default SearchBar;
