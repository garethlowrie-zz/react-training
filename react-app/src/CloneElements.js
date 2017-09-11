import React from 'react';


class CloneElements extends React.Component{
  render() {
    return(
      <Buttons>
        <button value="A">A</button>
        <button value="B">B</button>
        <button value="C">C</button>
      </Buttons>
    )
  }
}

class Buttons extends React.Component{
  constructor(){
    super();
    this.state = {selected: 'None'};
  }
  selectItem(selected){
    this.setState({selected});
  }
  render(){
    let cloneChildren = child => 
      React.cloneElement(child, { // 
        onClick: this.selectItem.bind(this, child.props.value)
      });

    let items = React.Children.map(this.props.children, cloneChildren); // For each child, clone it and add onClick prop 
    return(
      <div>
        <h1>You have selected: {this.state.selected}</h1>
        {items}
      </div>
    )
  }
}

export default CloneElements