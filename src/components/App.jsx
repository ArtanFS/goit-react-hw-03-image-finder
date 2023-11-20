import React, { Component } from 'react';
import { getImages } from './API/api';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import css from './App.module.css';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    loadMore: false,
    error: '',
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.handleImages();
    }
  }

  handleImages = async () => {
    const { images, query, page } = this.state;
    try {
      this.setState({ isLoading: true });
      const data = await getImages(query, page);
      this.setState({
        images: [...images, ...data.hits],
        error: '',
        isLoading: false,
        loadMore: page < Math.ceil(data.totalHits / 12),
      });
    } catch (error) {
      // this.setState({ error: error.response.data, isLoading: false });
    }
  };

  onSubmit = searchData => {
    this.setState({ query: searchData, images: [], page: 1 });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, loadMore, isLoading } = this.state;
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.onSubmit} />
        {isLoading && <h1>Loading...</h1>}
        {images && <ImageGallery images={images} />}
        {loadMore && <Button onClick={this.handleLoadMore} />}
      </div>
    );
  }
}
