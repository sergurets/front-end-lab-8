import React, { Component } from 'react';
import ReactDom from 'react-dom';

export default class Selected extends React.Component {
	
  render() {
    let colors = this.props.colors.concat();
	if(this.props.colors.length>5){
		colors.splice(0, (colors.length-5))
	}
	else {colors=this.props.colors}
	function setClass(id){
		 return(`selected color${id}`)
	 } 
	 return(
			colors.map((item,index) =>(
					<div className={setClass(item.id)} key={index} id={item.id}>
					<span onClick={() => this.props.delColor(index, item.id)} className="delColor"><i className="material-icons">clear</i></span>
					</div>
				))
		); 
  }
}


