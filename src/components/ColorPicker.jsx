import React from 'react';
import PropTypes from 'prop-types';
import Color from './Color';

const COLORS = [
  '#FF5722',
  '#CDDC39',
  '#FFEB3B',
  '#03A9F4',
  '#009688',
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
