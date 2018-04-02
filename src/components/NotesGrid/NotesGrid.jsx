import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';
// Components
import Note from '../Note/Note';
// Style
import './NotesGrid.css';

const masonryOptions = {
  itemSelector: '.Note',
  columnWidth: 200,
  gutter: 10,
  isFitWidth: true,
};

function NotesGrid({ notes, onNoteDelete }) {
  return (
    <Masonry className="NotesGrid" options={masonryOptions} >
      {
        notes.map(note => (
          <Note
            key={note.id}
            id={note.id}
            onDelete={() => onNoteDelete(note.id)}
            color={note.color}
          >
            {note.text}
          </Note>
        ))
      }
    </Masonry>
  );
}

NotesGrid.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
  onNoteDelete: PropTypes.func.isRequired,
};
NotesGrid.defaultProps = {};

export default NotesGrid;
