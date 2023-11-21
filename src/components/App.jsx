import React, { Component } from 'react';
import { getImages } from './API/api';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import { Modal } from './Modal';
import css from './App.module.css';
import { ThreeDots } from 'react-loader-spinner';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    loadMore: false,
    isShowModal: false,
    modalImg: '',
    modalImgAlt: '',
    noResult: false,
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
        loadMore: page < Math.ceil(data.totalHits / 12),
        noResult: false,
        error: '',
      });
      if (data.hits.length === 0) {
        this.setState({ noResult: true });
      }
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
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

  toggleModal = (image, alt) => {
    this.setState(({ isShowModal }) => ({
      isShowModal: !isShowModal,
      modalImg: image,
      modalImgAlt: alt,
    }));
  };

  render() {
    const {
      images,
      loadMore,
      isLoading,
      isShowModal,
      modalImg,
      modalImgAlt,
      noResult,
      error,
    } = this.state;
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.onSubmit} />
        {images && (
          <ImageGallery images={images} openModal={this.toggleModal} />
        )}
        {isLoading && (
          <ThreeDots
            wrapperClass={css.Loader}
            height="80"
            width="80"
            radius="15"
            color="#3f51b5"
            ariaLabel="three-dots-loading"
            visible={true}
          />
        )}
        {loadMore && <Button onClick={this.handleLoadMore} />}
        {noResult && (
          <h1 className={css.Message}>
            Sorry, nothing was found for your query.
          </h1>
        )}
        {error && (
          <h1 className={css.Message}>
            Sorry, but some error occurred: {error}.
          </h1>
        )}
        {isShowModal && (
          <Modal
            image={modalImg}
            alt={modalImgAlt}
            closeModal={this.toggleModal}
          />
        )}
      </div>
    );
  }
}
