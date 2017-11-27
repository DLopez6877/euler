import React from 'react';
import './Header.css';

class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="tabs">
        <div className="tab active">{this.props.problem.title}</div>
        <div className="tab">About</div>
      </div>
    );
  }
}

export default Header;
