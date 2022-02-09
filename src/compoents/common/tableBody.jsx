import React, { Component } from "react";

class TableBody extends Component {
  render() {
    const { columns, data } = this.props;
    return (
      <tbody>
        {data.map((entry) => {
          return (
            <tr>
              {columns.map((c) => {
                if (c.path) return <td>{entry[c.path]}</td>;
                else return <td>{c.content()}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    );
  }
}
export default TableBody;
