import React from 'react';

const clientId = d3f60f3029d54c3cac8e91e6bc672d28;
const redirectUri = "http://localhost:3000/";

let userAccessToken;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
    return accessToken;
    }
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/'); //this clears the parameters, allowing us to grab a new access token when it expires
      return accessToken;
    } else {
    const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
    window.location = accessUrl;
    }
  }
 search(term).then {
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      };
    })
    .then(response => response.json());
    .then(resonse.json.map(track => [
      id: track.id,
      name: track.name,
      artist: track.artists[0].name,
      album: track.album.name,
      uri: track.uri
    ]));
  });
}


export default Spotify;
