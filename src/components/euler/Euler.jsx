import React from 'react';
import './Euler.css';
import Content from '../content/Content';
import Header from '../header/Header';
import Navigation from '../navigation/Navigation';

//problems
import ProblemOne from '../../repositories/problem_one';
import ProblemTwo from '../../repositories/problem_two';
import ProblemThree from '../../repositories/problem_three';
import ProblemFour from '../../repositories/problem_four';
import ProblemFive from '../../repositories/problem_five';
import ProblemTen from '../../repositories/problem_ten';

class Euler extends React.Component {
  constructor() {
    super();
    this.state = {
      problems: [ProblemOne, ProblemTwo, ProblemThree, ProblemFour, ProblemFive, ProblemTen],
      currentProblem: 0
    };

    this.changeCurrentProblem = this.changeCurrentProblem.bind(this);
  }

  changeCurrentProblem(newIndex) {
    this.setState({ currentProblem: newIndex });
  }

  render() {
    return (
      <div className="euler">
        <Header />
        <Navigation
          handleProblemChange={this.changeCurrentProblem} problems={this.state.problems} />
        <Content problem={this.state.problems[this.state.currentProblem]} />
      </div>
    );
  }
}

export default Euler;
