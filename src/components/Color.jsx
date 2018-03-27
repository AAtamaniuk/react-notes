import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Color extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { onColorChange, color } = this.props;
    onColorChange(color);
  }

  render() {
    const { color, isActive } = this.props;
    return (
      <button
        className={`Color ${isActive ? 'Color--active' : ''}`}
        color={color}
        style={{ backgroundColor: color }}
        onClick={this.handleClick}
      />
    );
  }
}

Color.propTypes = {
  color: PropTypes.string.isRequired,
  onColorChange: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
};

Color.defaultProps = {
  isActive: false,
};

export default Color;
