import React from 'react';
import PropTypes from 'prop-types';
import Color from '../Color/Color';
// Styles
import './ColorPicker.css';

const COLORS = [
  '#FF8783',
  '#FFCD8B',
  '#FFFD9D',
  '#CCD7DB',
  '#73D8FA',
  '#9FFEEB',
  '#CAFC9E',
];

const ColorPicker = ({ onColorChange, activeColor }) => (
  <div className="ColorPicker">
    {
        COLORS.map(color =>
          (<Color
            onColorChange={onColorChange}
            key={color}
            color={color}
            isActive={color === activeColor}
          />))
    }
  </div>
);

ColorPicker.propTypes = {
  onColorChange: PropTypes.func.isRequired,
  activeColor: PropTypes.string.isRequired,
};
ColorPicker.defaultProps = {};

export default ColorPicker;
