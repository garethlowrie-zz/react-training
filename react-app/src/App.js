import React from 'react';

// Class can have state
class App extends React.Component{

  constructor() {
    super(); // Give $this context of component (App)
    this.state = {
      txt: "This is the state text"
    }
    this.update = this.update.bind(this);
  }

  update (e){
    this.setState({
      txt: e.target.value
    })
  }

  render() {
    let txt = this.props.txt;
    return (
      <div>
       <Widget update={this.update} />
       <Widget update={this.update} />
       <Widget update={this.update} />
        <h1>{this.state.txt}</h1>
        <Title text="Subtitle" />
        <p>{txt}</p>
      </div>
    )
  }
}

const Title = (props) => <h1>Title: {props.text}</h1>

Title.propTypes = {
  text(props, propName, component){
    if(!(propName in props))
    {
      return new Error(`Missing ${propName}`)
    }
    if(props[propName].length < 6)
    {
      return new Error(`${propName} is less than 6 characters`);
    }
  }
}

const Widget = (props) => <input type="text" onChange={props.update} />

App.propTypes = {
  txt:  React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: "this is the default text"
}

// Stateless function componenent [can't have state]
// const App = () => <h1>Hello World</h1>

export default App