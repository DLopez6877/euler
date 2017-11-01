import React from 'react';

class Solution extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      goal: this.props.problem.goal
    }
    this.handleChange = this.handleChange.bind(this);
    this.runSolution = this.runSolution.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      goal: nextProps.problem.goal,
      result: null
    });
  }

  runSolution() {
    this.setState({result: this.props.problem.solution(this.state.goal)});
  }

  handleChange(event) {
    this.setState({goal: event.target.value});
  }


  render() {
    return (
      <div>
        <h2>{this.props.problem.title}</h2>
        <a href={this.props.problem.href}>Project Euler</a>
        <p>{this.props.problem.description.split('\n').map((item, key) => {
          return <span key={key}>{item}<br/></span>
        })}</p>
        <button onClick={this.runSolution}>Solve</button>
        <p>Answer: {this.state.result}</p>
        <pre>
          <p>let goal = </p>
          <input type="number" value={this.state.goal} onChange={this.handleChange} />
          {`${this.props.problem.solution}`}
        </pre>
      </div>
    );
  }
}

export default Solution;
