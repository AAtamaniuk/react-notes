import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Masonry from 'masonry-layout';
import Note from '../Note/Note';
// Style
import './NotesGrid.css';

class NotesGrid extends Component {
  componentDidMount() {
    this.msnry = new Masonry(this.grid, {
      itemSelector: '.Note',
      columnWidth: 200,
      gutter: 10,
      isFitWidth: true,
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.notes.length !== prevProps.notes.length) {
      this.msnry.reloadItems();
      this.msnry.layout();
    }
  }

  render() {
    const { onNoteDelete } = this.props;

    return (
      <div className="NotesGrid" ref={(grid) => { this.grid = grid; }}>
        {
        this.props.notes.map(note => (
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
      </div>
    );
  }
}

NotesGrid.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onNoteDelete: PropTypes.func.isRequired,
};
NotesGrid.defaultProps = {};

export default NotesGrid;
