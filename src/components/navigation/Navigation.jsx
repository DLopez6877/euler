import React from 'react';
import './Navigation.css';
import NavigationItem from '../NavigationItem/NavigationItem';

function Navigation(props) {
  return (
    <div className="navigation">
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
