import React from 'react';
import './Navigation.css';
import NavigationItem from '../NavigationItem/NavigationItem';

function Navigation(props) {
  return (
    <div className="navigation">
      <div className="nav-header">▾ DJL-Coding-Challenges</div>
      {props.problems.map((problem, index) =>
        <NavigationItem
          key={index}
          index={index}
          problem={problem}
          handleProblemChange={props.handleProblemChange}
          />
      )}
    </div>
  )
}

export default Navigation;
