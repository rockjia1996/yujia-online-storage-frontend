import React, { Component } from "react";
import Input from "./input";

class SearchBar extends Component {
  state = {};
  render() {
    const { value, onChange } = this.props;

    return (
      <div>
        <Input
          type="text"
          value={value}
          id="searchBar"
          name="searchBar"
          placeholder="Search ..."
          onChange={(e) => onChange(e.currentTarget.value)}
        />
      </div>
    );
  }
}

export default SearchBar;
