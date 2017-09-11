import React from 'react';
import './App.css';

class Children extends React.Component{
  render() {
    return(
      <Parent>
        <div className="firstChild">Children</div>
        <div className="secondChild"></div>
      </Parent>
    )
  }
}

class Parent extends React.Component{
  render(){
    // let items = React.Children  
    //               .map(this.props.children, child => child)

    // let items = React.Children
    //               .forEach(this.props.children, child => console.log(child.props.className))

    let items = React.Children.toArray(this.props.children)
    console.log(items)
    return null
  }
}



export default Children