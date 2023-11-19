import { Component } from 'react';

class Searchbar extends Component {
  state = {
    search: '',
  };

  handleChange = e => {
    this.setState({ search: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.search.trim() === '') {
      return;
    }
    this.props.onSubmit(this.state.search);
    this.setState({ search: '' });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.onSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.search}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
