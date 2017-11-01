import React from 'react';
import Problem from '../problem/Problem';
import './Content.css';

function Content(props) {
  return (
    <div className="content">
      <Problem problem={props.problem} />
    </div>
  )
}

export default Content;
