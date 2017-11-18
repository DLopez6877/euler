import React from 'react';
import './Problem.css';

class Problem extends React.Component {
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
      result: null,
      goal: nextProps.problem.goal
    });
  }

  runSolution() {
    this.setState({result: this.props.problem.solution(this.state.goal)});
  }

  handleChange(event) {
    this.setState({goal: event.target.value});
  }

  componentDidMount() {
    var input = document.getElementById('goal');
    console.log(input);
    input.focus();
  }

  render() {
    return (
      <div className="wrapper">
        <a href={this.props.problem.href}>Project Euler</a>
        <p>{this.props.problem.description.split('\n').map((item, key) => {
          return <span key={key}>{item}<br/></span>
        })}</p>
        <button onClick={this.runSolution}>Solve</button>
        <p>Answer: {this.state.result}</p>
        <pre>
          <p>let goal = </p>
          <input id="goal" type="number" value={this.state.goal} onChange={this.handleChange} />
          <div className="code">{`${this.props.problem.solution}`}</div>
        </pre>
      </div>
    );
  }
}

export default Problem;
