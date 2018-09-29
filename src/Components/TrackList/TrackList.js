import React from 'react';
import 'TrackList.css';

//import Track from './Track';

class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
        //You will add a map method that renders a set of Track components  -->
        {this.props.tracks.map(track => {
          return
              debugger
                  <Track track={track}
                     key={track.id} />
                  <Track track= {this.props.track.name} />
                  <Track track= {this.props.track.artist} />
                  <Track track= {this.props.track.album} />
        }};
      </div>
  }
}

export defualt TrackList;
