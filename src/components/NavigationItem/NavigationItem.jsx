import React from 'react';

class NavigationItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleProblemChange = this.handleProblemChange.bind(this);
  }

  handleProblemChange() {
    this.props.handleProblemChange(this.props.index);
  }

  render() {
    return (
      <div>
        ▸ <a onClick={this.handleProblemChange}>{this.props.problem.title}</a>
      </div>
    );
  }
}

export default NavigationItem;
