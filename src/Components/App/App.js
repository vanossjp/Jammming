import React, { Component } from 'react';

import './App.css';
import SearchResults from '../SearchResults/SearchResults.js';
import Playlist from '../Playlist/Playlist.js';
//import './SearchBar';


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
  }

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id))
      {
      return;
      }
      let newPlaylist=this.state.playlistTracks;
        newPlaylist.push(track);

  };

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

          <div className="App-playlist">

          // Add a SearchResults component -->
          <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
          // Add a Playlist component -->
          <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
