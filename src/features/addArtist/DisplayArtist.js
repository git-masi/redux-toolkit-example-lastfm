// Modules
import React from 'react';
import { useSelector } from 'react-redux';

// Slices
import { selectAllArtists } from './artistSlice';

/**
 * ==================
 * EXPORTED COMPONENT
 * ==================
 */
function DisplayArtist() {
    const artists = useSelector(selectAllArtists);

    return (
        <div>
            {artists.map((artist) => (
                <p key={artist.id}>{artist.artistName}</p>
            ))}
        </div>
    );
}

export default DisplayArtist;
