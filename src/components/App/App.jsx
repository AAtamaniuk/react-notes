import React, { Component } from 'react';
import Search from '../Search/Search';
import NoteEditor from '../NoteEditor/NoteEditor';
import NotesGrid from '../NotesGrid/NotesGrid';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      searchValue: '',
    };
    this.handleNoteAdd = this.handleNoteAdd.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleNoteDelete = this.handleNoteDelete.bind(this);
    this.getDisplayedNotes = this.getDisplayedNotes.bind(this);
  }

  componentDidMount() {
    const localNotes = JSON.parse(localStorage.getItem('notes'));
    if (localNotes) {
      this.setState({ notes: localNotes });
    }
  }

  componentDidUpdate() {
    this.updateLocalStorage();
  }

  getDisplayedNotes() {
    const { notes, searchValue } = this.state;
    return (
      notes.filter(note => note.text.toLowerCase().indexOf(searchValue) !== -1)
    );
  }

  handleSearchChange(e) {
    this.setState({ searchValue: e.target.value.toLowerCase() });
  }

  handleNoteDelete(note) {
    const noteId = note.id;
    const newNotes = this.state.notes.filter(n => n.id !== noteId);
    this.setState({ notes: newNotes });
  }

  handleNoteAdd(newNote) {
    const newNotes = this.state.notes.slice();
    newNotes.unshift(newNote);
    this.setState({
      notes: newNotes,
      searchValue: '',
    });
  }

  updateLocalStorage() {
    const notes = JSON.stringify(this.state.notes);
    localStorage.setItem('notes', notes);
  }

  render() {
    const { searchValue } = this.state;

    return (
      <div className="App">
        <h2 className="App__header">NotesApp</h2>
        <NoteEditor onNoteAdd={this.handleNoteAdd} />
        <Search onSearchChange={this.handleSearchChange} value={searchValue} />
        <NotesGrid
          notes={this.getDisplayedNotes()}
          onNoteDelete={this.handleNoteDelete}
        />
      </div>
    );
  }
}

export default App;
