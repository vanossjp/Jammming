import React from 'react';

let userAccessToken;

const Spotify = {
  async getAccessToken() {
    if (userAccessToken) {
    return userAccessToken;
  }else{
    const urltoFetch = 'https://accounts.spotify.com/authorize?'
    const queryResponseType = 'response_type=token';
    const queryRedirect = 'redirect_uri=http://localhost:3000';
    const scopes = 'user-read-private playlist-modify-private'
  }
  }
};

export default Spotify;
