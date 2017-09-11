import React from 'react';
import './App.css';

class JSXCompiler extends React.Component{

  constructor() {
    super(); // Give $this context of component (App)
    this.state = {
      input: '/* Add your jsx here */',
      output: '',
      err: ''
    }
    this.update = this.update.bind(this);
  }

  update(e){
    let code = e.target.value;
    try  {
      this.setState({
        output: window.Babel
                  .transform(code, { presets: ['es2015', 'react']})
                  .code, // Why .code?
        err: ''          // Why err 
      })
    }
    catch(err) {
      this.setState({err: err.message})
    }
  }

  render() {
    return(
      <div>
        <h1>JSX Compiler</h1>
        <header>{this.state.err}</header>
        <div className="container">
          <textarea
            onChange={this.update}
            defaultValue={this.state.input} />
          <pre>
            {this.state.output}
          </pre>
        </div>
      </div>
    )
  }
}



export default JSXCompiler