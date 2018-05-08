import React, { Component } from 'react';
import ReactDom from 'react-dom';

export default class Counter extends React.Component {
	
  render() {
    const colors = this.props.colors;
	 return(
	     <p className="counter">Colors: {this.props.colors.length}</p>
			
		); 
  }
}


