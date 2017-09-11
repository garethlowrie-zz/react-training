import React from 'react';

// Class can have state

/**
 * Higher Order Component
 * @param {*} InnerComponent 
 */
const HOC = (InnerComponent) => class extends React.Component{
  constructor()
  {
    super();
    this.state = {count: 0};
  }

  update(){
    this.setState({count: this.state.count +1})
  }

  render(){
    return(
      <InnerComponent 
        {...this.props} // Spread down to components
        {...this.state} // Spread down to components
        update={this.update.bind(this)}
      />
    )
  }
}

class HigherOrderComponents extends React.Component{

  constructor(props) {
    super(props); // Give $this context of component (App)
  }

  render() {
    return(
      <div>
        <LabelHOC>label</LabelHOC><br/>
        <Button>button</Button>
      </div>
    )
  }
}

class Label extends React.Component{
  render(){
    return(
      <label onClick={this.props.update}>{this.props.children}  - {this.props.count}</label>
    )
  }
}

const Button = HOC((props) => <button onClick={props.update}>{props.children} - {props.count}</button>);

const LabelHOC = HOC(Label);

export default HigherOrderComponents