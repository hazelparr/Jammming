import React, { Component } from 'react';
import './Playlist.css';
import Tracklist from '../TrackList/TrackList';

class Playlist extends Component {
	constructor(props) {
		super(props);
		this.handleNameChange = this.handleNameChange.bind(this);
	}

  
  handleNameChange(event) {
  	this.props.onNameChange(event.target.value)
  }

  render() {
	return (        
	  <div className="Playlist">
		<input id="Playlist-name" placeholder="New Playlist" defaultValue={this.props.playlistName}/>
		<Tracklist tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={true} onChange={this.props.handleNameChange}/>
		<a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
	  </div>
	);
  }
}

export default Playlist;