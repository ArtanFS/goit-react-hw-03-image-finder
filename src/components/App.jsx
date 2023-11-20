import React, { Component } from 'react';
import Searchbar from './Searchbar';
import { getImages } from './API/api';
import ImageGallery from './ImageGallery';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    error: '',
  };

  componentDidUpdate(_, prevState) {
    if (prevState.query !== this.state.query) {
      this.handleImages();
    }
  }

  handleImages = async () => {
    try {
      this.setState({ isLoading: true });
      const data = await getImages(this.state.query, this.state.page);
      // console.log(data);
      this.setState({ images: data, error: '', isLoading: false });
    } catch (error) {
      // this.setState({ error: error.response.data, isLoading: false });
    }
  };

  onSubmit = searchData => {
    this.setState({ query: searchData });
  };

  render() {
    const { images } = this.state;
    // console.log(images.hits);

    return (
      <div>
        <Searchbar onSubmit={this.onSubmit} />
        {images && <ImageGallery images={images.hits} />}
      </div>
    );
  }
}
