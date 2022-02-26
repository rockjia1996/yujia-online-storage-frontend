import React, { Component } from "react";

class Sidebar extends Component {
  state = {};
  render() {
    const { tabs, currentTab, onChange } = this.props;
    return (
      <div>
        <ul className="list-group">
          {tabs.map((tab) => (
            <li
              key={tab}
              className={
                tab === currentTab
                  ? "list-group-item active"
                  : "list-group-item"
              }
              style={{ cursor: "pointer" }}
              onClick={() => onChange(tab.toLowerCase())}
            >
              {tab}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Sidebar;
