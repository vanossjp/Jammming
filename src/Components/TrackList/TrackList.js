import React from 'react';
import './TrackList.css';
import Track from '../Track/Track.js';

class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
        <h3> {this.props.tracks.map(track => {
          return (
              <Track
                track={track}
                key={track.id}
                onAdd={this.props.onAdd}
                onRemove={this.props.onRemove}
              />
          )
        })}
        </h3>
      </div>
    )
  }
}

export default TrackList;
