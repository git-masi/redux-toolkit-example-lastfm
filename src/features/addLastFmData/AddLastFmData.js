// Modules
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Redux
import { addLastFmData } from './lastFmSlice';
import { selectAllArtists } from '../addArtist/artistSlice';

async function getLastFmData(args) {
    const { id, artist, dispatch } = args;

    const uriEncodedArtist = encodeURI(artist);
    const apiKey = '53088928155ec2c4de64e853dcaf4bcd';
    const url = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${uriEncodedArtist}&api_key=${apiKey}&format=json`;

    try {
        const response = await fetch(url);
        const artist = await response.json();
        dispatch(addLastFmData({ id, artist }));
    } catch (error) {
        console.log(error);
    }
}

/**
 * ==================
 * EXPORTED COMPONENT
 * ==================
 */
function AddLastFmData() {
    const artists = useSelector(selectAllArtists);

    const dispatch = useDispatch();

    function handleClick(e) {
        const el = e.target;
        const id = el.dataset.id;
        const artist = el.innerText.trim();
        console.log(artist);
        getLastFmData({ id, artist, dispatch });
    }

    return (
        <div>
            {artists.map((artist) => (
                <button
                    key={artist.id}
                    data-id={artist.id}
                    onClick={handleClick}
                >
                    {artist.artistName}
                </button>
            ))}
        </div>
    );
}

export default AddLastFmData;
