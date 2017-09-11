import React from 'react';

// Class can have state
class CreateComponentsFromArrays extends React.Component{

  constructor(props) {
    super(props); // Give $this context of component (App)
    this.state = {items: []};
    this.update = this.filter.bind(this);
  }
  componentWillMount(){
    fetch('http://swapi.co/api/people/?format=json')
      .then( response => response.json() )
      .then( ({results: items}) => this.setState({items}) )
  }
  filter(e){
    this.setState({filter: e.target.value})
  }
  render() {
    let items = this.state.items;
    if(this.state.filter)
    {
      items = items.filter( item =>
        item.name.toLowerCase()
        .includes(this.state.filter.toLowerCase())
      )
    }
    console.log('render');
    return(
      <div>
      <input type="text" onChange={this.update} />
        {items.map(item => <Person key={item.name} person={item} />)}
      </div>
    )
  }
}

const Person = (props) => <h4>{props.person.name}</h4>

export default CreateComponentsFromArrays