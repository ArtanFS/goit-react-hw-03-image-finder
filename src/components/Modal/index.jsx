import { Component } from 'react';
import css from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.hendleKeyboardClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.hendleKeyboardClose);
  }

  hendleKeyboardClose = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  closeOnClickBackdrop = e => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <div className={css.Overlay} onClick={this.closeOnClickBackdrop}>
        <div className={css.Modal}>
          <img src={this.props.modalData.url} alt={this.props.modalData.alt} />
        </div>
      </div>
    );
  }
}

export default Modal;
