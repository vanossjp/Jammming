import React from 'react';
import 'Playlist.css';
import TrackList from '../TrackList/TrackList.js';

class Playlist extends React.Component {
  render() {
    return
      <div className="Playlist">
        <input defaultValue={'New Playlist'}/>
        //Add a TrackList component -->
        <Tracklist tracks={this.props.playlistTracks} />
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
  }
}
export default Playlist;
