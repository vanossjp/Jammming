import React, { Component } from 'react';

import './App.css';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import Spotify from '../../util/Spotify.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          name: "Track Name",
          artist: "Test Artist",
          album: "Test Album",
          id: "1"
        },
        {
          name: "Track Name",
          artist: "Test Artist",
          album: "Test Album",
          id: "2"
        },
        {
          name: "Track Name",
          artist: "Test Artist",
          album: "Test Album",
          id: "3"
        },
        {
          name: "Track Name",
          artist: "Test Artist",
          album: "Test Album",
          id: "4"
        }],
      playlistName: "Custom Title",
      playlistTracks: [
        {
          name: "Track Name",
          artist: "Test Artist",
          album: "Test Album",
          id: "1"
        },
        {
          name: "Track Name",
          artist: "Test Artist",
          album: "Test Album",
          id: "2"
        },
        {
          name: "Track Name",
          artist: "Test Artist",
          album: "Test Album",
          id: "3"
        },
        ]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist= this.savePlaylist.bind(this);
    this.search= this.search.bind(this);
  }

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)){
      return;
    }else{
      let newPlaylist=this.state.playlistTracks;
      newPlaylist.push(track);
      this.setState({playlistTracks:newPlaylist});
      return;
    }
  }

  removeTrack(track) {
    let updatePlaylist =
      this.state.playlistTracks.filter(song => song.id !==track.id);
      this.setState({playlistTracks:updatePlaylist});
  }

  updatePlaylistName(name) {
    this.setState({playlistName:name});
  }

  savePlaylist() {
    let trackURIs = this.state.playlistTracks.map(track => track.uri);
  }

  search(term) {
    console.log(term);
    //Spotify.search(term);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          // Add a SearchBar component -->
          <SearchBar
            onSearch={this.search}
          />
          <div className="App-playlist">

          // Add a SearchResults component -->
          <SearchResults
            searchResults={this.state.searchResults}
            onAdd={this.addTrack}
          />
          // Add a Playlist component -->
          <Playlist
            playlistName={this.state.playlistName}
            playlistTracks={this.state.playlistTracks}
            onRemove={this.removeTrack}
            onNameChange={this.updatePlaylistName}
            onSave={this.savePlaylist}
          />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
