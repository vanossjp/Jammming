import React from 'react';
import './Track.css';
import TrackList from '../TrackList/TrackList.js';

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack=this.addTrack.bind(this);
    this.removeTrack-this.removeTrack.bind(this);
  }
  addTrack() {
    this.props.onAdd(this.props.track);
  }
  removeTrack() {
    this.props.onRemove(this.props.track);
  }
  render() {
    return
      <div className="Track">
        <div className="Track-information">
          <h3> {this.props.track.name} </h3>
          <p> {this.props.track.artist} | {this.props.track.album} </p>
        </div>
        // <a className="Track-action">+ or - will go here --></a>
        <a onClick={this.addTrack}> + </a>
        <a onClick={this.removeTrack}> - </a>
      </div>
  }
}
export default Track;
