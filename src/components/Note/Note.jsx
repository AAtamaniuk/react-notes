import React from 'react';
import PropTypes from 'prop-types';

const Note = ({ color, onDelete, children }) => {
  const style = { backgroundColor: color };
  return (
    <div className="Note" style={style}>
      <button className="Note__delete" onClick={onDelete}> × </button>
      {children}
    </div>
  );
};

Note.propTypes = {
  color: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};
Note.defaultProps = {};

export default Note;
