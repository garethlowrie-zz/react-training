import React from 'react';
import ReactDOM from 'react-dom';

// Class can have state
class MountUnmount extends React.Component{

  constructor() {
    super(); // Give $this context of component (App)
    this.state = {val: 0};
    this.update = this.update.bind(this);
  }

  update(e)
  {
    this.setState({val: this.state.val + 1});
  }

  componentWillMount(){
    console.log('component will mount');
  }

  componentDidMount(){
    console.log('component did mount');
  }
  componentWillUnmount(){
    console.log('component will unmount');
  }

  render() {
    console.log('render');
    return(
      <button onClick={this.update}>{this.state.val}</button>
    )
  }
}

class Wrapper extends React.Component{

  mount(){
    ReactDOM.render(<MountUnmount />, document.getElementById('a'));
  }
  unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('a'));
  }

  render(){
    return(
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>Unmount</button>
        <div id="a">
        </div>
      </div>
    )
  }
}

export default Wrapper