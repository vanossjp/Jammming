import React from 'react';
import './SearchBar.css';
import App from '../App/App';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }
  search() {
    this.props.onSearch(this.state.SearchBar);
  }
  handleTermChange(event) {
    this.props.onSearch(event.target.value);
  }
  render() {
    return (
      <div className="SearchBar">
        <input
          placeholder="Enter A Song, Album, or Artist"
          onChange={this.handleTermChange}
        />
        <a>SEARCH</a>
      </div>
    )
  }
}
export default SearchBar;
