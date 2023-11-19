import React, { Component } from 'react';
import Searchbar from './Searchbar';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
  };

  onSubmit = searchData => {
    this.setState({ query: searchData });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.onSubmit} />
      </div>
    );
  }
}
