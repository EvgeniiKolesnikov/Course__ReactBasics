import { Component } from 'react';

class ClassComponent extends Component {
  state = {
    text: "Hello, I'm old class component",
  };

  componentWillMount() {
    console.log('componentWillMount');
  }

  render() {
    console.log('render');
    return <div className='text'>{this.state.text}</div>;
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

}

export default ClassComponent;
