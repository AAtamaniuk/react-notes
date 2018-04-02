import React from 'react';
import PropTypes from 'prop-types';
// Style
import './Note.css';

const Note = ({
  id, color, onDelete, children,
}) => {
  const style = { backgroundColor: color };
  return (
    <div className="Note" style={style} id={id} >
      <button className="Note__delete" onClick={onDelete}> × </button>
      {children}
    </div>
  );
};

Note.propTypes = {
  id: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};
Note.defaultProps = {};

export default Note;
