
import React, { Component } from 'react';
import ReactDom from 'react-dom';

export default class Colorlist extends React.Component {
	
  render() {
    const colors = this.props.colors;
	if(colors.length===0) {return (<p className='info'>There are no colors found</p>)}
	else {
			function setClass(id){
		 return(`color color${id}`)
	 } 
	 
	 return(
			colors.map((item,index) =>(
					<div className={setClass(item.id)} key={index} id={item.id}>
					<span onClick={() => this.props.addColor(index)} className="addColor" ><i className="material-icons">add</i> Add</span>
					</div>
				))
		); 
	}

  }
}

