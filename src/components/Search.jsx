import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(e) {
    this.props.onSearchChange(e);
  }

  render() {
    const { value } = this.props;
    return (
      <input
        type="text"
        className="Search"
        placeholder="Search"
        onChange={this.handleSearchChange}
        value={value}
      />
    );
  }
}

Search.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
Search.defaultProps = {};

export default Search;
