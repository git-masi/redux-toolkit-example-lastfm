import React from 'react';
import './App.css';
import AddArtist from './features/addArtist/AddArtist';
import DisplayArtist from './features/addArtist/DisplayArtist';
import AddLastFmData from './features/addLastFmData/AddLastFmData';

function App() {
  return (
    <div className="App">
      <AddArtist/>
      <DisplayArtist/>
      <AddLastFmData/>
    </div>
  );
}

export default App;
