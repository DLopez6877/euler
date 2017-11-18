import React from 'react';
import './Header.css';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Header works"
    }
    // this.handleChange = this.handleChange.bind(this);
    // this.runSolution = this.runSolution.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //   this.setState({
  //     result: null,
  //     goal: nextProps.problem.goal
  //   });
  // }

  // runSolution() {
  //   this.setState({result: this.props.problem.solution(this.state.goal)});
  // }

  // handleChange(event) {
  //   this.setState({goal: event.target.value});
  // }

  render() {
    return (
      <div>
        {/* <div>Header works</div> */}
        <div className="tab">{this.props.title}</div>
      </div>
    );
  }
}

export default Header;
