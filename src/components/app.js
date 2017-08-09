import React, { Component } from 'react';
import Header from './header';
import Cover from './cover';

export default class App extends Component {
  render() {
    return (
      <div>
      	<Header />
      	{this.props.children ? 
      		this.props.children : 
      		<Cover />
      	}
      </div>
    );
  }
}
