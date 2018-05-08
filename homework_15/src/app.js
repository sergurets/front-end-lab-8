import React, { Component } from 'react';
// This plugin automatically reload page on changes
import { hot } from 'react-hot-loader';
import Colorlist from './features/ColorListComponent.js';
import colors from './features/colors.js';
import Selected from './features/Selected.js';
import Counter from './features/Counter.js';

class App extends Component {
	constructor(props) {
    super(props);
    this.state = {colors: colors, filteredColors: colors, selectedColors: []};
    this.addColor = this.addColor.bind(this);
	this.delColor = this.delColor.bind(this);
  } 
  
  addColor (index) {
  var defstate = this.state.colors;
  var selectCol = this.state.selectedColors.concat(defstate.splice(index, 1));
  this.setState({colors: defstate, filteredColors: defstate, selectedColors: selectCol } );

  
  
  }
  
    delColor (index, id) {
	var a = this.state.selectedColors;
	var c = a.splice(index, 1)[0];
	var s=this.state.colors;
	s.splice((id-1), 0, c);
	this.setState({selectedColors: a, colors: s} );

  }
  
  
  
  filterArr(arr, val){

	function isColor(el) {
      var result=false;
      el.tags.forEach(function(el){
          if(el.indexOf(val) !== -1) {
            result = true;
          };
      });
      return result;
    }
      return arr.filter(isColor)
  }
   
  onChange (e) {
	this.setState({
       filteredColors: this.filterArr(this.state.colors, e.target.value)
    });
	
  }
  render() {
    return (
      <div>
	  <div className='controls'>
	   <input type="text" autoFocus placeholder="Color's name, tags."  onChange={this.onChange.bind(this)} />
       <div className='selectedColors'><Selected delColor={this.delColor} colors={this.state.selectedColors}/></div>
	   </div>
	   <Counter colors={this.state.filteredColors}/>
	  <div className='colors'>
	  <Colorlist addColor={this.addColor} colors={this.state.filteredColors}/>
	  
	  </div>
	  </div>
    );
  }
}

// Note: Hot reloading occurs after you save file in the editor.
export default hot(module)(App);