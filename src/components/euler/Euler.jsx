import React from 'react';
import './Euler.css';
import Content from '../content/Content';
import Header from '../header/Header';
import Navigation from '../navigation/Navigation';
import About from '../about/About';

//problems
import ProblemOne from '../../repositories/problem_one';
import ProblemTwo from '../../repositories/problem_two';
import ProblemThree from '../../repositories/problem_three';
import ProblemFour from '../../repositories/problem_four';
import ProblemFive from '../../repositories/problem_five';
import ProblemSix from '../../repositories/problem_six';
import ProblemSeven from '../../repositories/problem_seven';
import ProblemEight from '../../repositories/problem_eight';
import ProblemNine from '../../repositories/problem_nine';
import ProblemTen from '../../repositories/problem_ten';
import ProblemEleven from '../../repositories/problem_eleven';
import ProblemTwelve from '../../repositories/problem_twelve';
import ProblemThirteen from '../../repositories/problem_thirteen';

class Euler extends React.Component {
  constructor() {
    super();
    this.state = {
      problems: [ProblemOne, ProblemTwo, ProblemThree, ProblemFour, ProblemFive, ProblemSix, ProblemSeven, ProblemEight, ProblemNine, ProblemTen, ProblemEleven, ProblemTwelve, ProblemThirteen],
      currentProblem: 0
    };
    this.changeCurrentProblem = this.changeCurrentProblem.bind(this);
  }

  changeCurrentProblem(newIndex) {
    this.setState({ currentProblem: newIndex });
    setTimeout(function() {
      var goal = document.getElementById('goal');
      goal.style.width = ((goal.value.length + 1) * 9) + 'px';
    }, 50);
  }

  render() {
    return (
      <div className="euler">
        <Header problem={this.state.problems[this.state.currentProblem]} />
        <Navigation
          handleProblemChange={this.changeCurrentProblem} problems={this.state.problems} />
        <Content problem={this.state.problems[this.state.currentProblem]} />
        <About />
      </div>
    );
  }
}

export default Euler;
