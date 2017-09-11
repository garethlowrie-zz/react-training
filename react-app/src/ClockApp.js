import React from 'react';


// Class can have state
class ClockApp extends React.Component{

  constructor(props) {
    super(props); // Give $this context of component (App)
    this.state = {date: new Date()};
  }

  update(e)
  {
    
  }

  componentWillMount(){
   
  }

  componentDidMount(){
    this.timerIds = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount(){
    clearInterval(this.timerIds);
  }

  tick()
  {
    this.setState({date: new Date()});
  }

  render() {
    console.log('render');
    return(
      <h1>It is {this.state.date.toLocaleTimeString()}</h1>
    )
  }
}


export default ClockApp