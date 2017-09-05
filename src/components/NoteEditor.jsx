import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ColorPicker from './ColorPicker';

class NoteEditor extends Component {
  constructor(props) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.onColorChange = this.onColorChange.bind(this);
    this.handleNoteAdd = this.handleNoteAdd.bind(this);
    this.state = {
      text: '',
      color: '#FFEB3B'
    }
  }

  handleTextChange(event) {
    this.setState({text: event.target.value});
  };

  onColorChange(color) {
    this.setState({color: color});
  }

  handleNoteAdd() {
    const newNote = {
      text: this.state.text,
      color: this.state.color,
      id: Date.now()
    };

    this.props.onNoteAdd(newNote);
    this.setState({text: ''});
  }

  render() {
    return (
      <div className="NoteEditor">
                <textarea
                  className="NoteEditor__text-area"
                  placeholder="Enter your note here..."
                  rows={5}
                  value={this.state.text}
                  onChange={this.handleTextChange}
                />
        <div className="NoteEditor__controls">
          <ColorPicker onColorChange={this.onColorChange} activeColor={this.state.color} />
          <button
            className="NoteEditor__add-button"
            onClick={this.handleNoteAdd}
            disabled={this.state.text === ''}
          >Add</button>
        </div>
      </div>
    );
  }
}

NoteEditor.propTypes = {
  onNoteAdd: PropTypes.func.isRequired
};
NoteEditor.defaultProps = {};

export default NoteEditor;
