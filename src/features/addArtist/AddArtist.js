// Modules
import React from 'react';
import { useDispatch } from 'react-redux';

// Slices
import { addArtist } from './artistSlice';

// Utils
import getRandomId from '../../utils/getRandomId';

// CSS
import styles from './AddArtist.module.css';

/**
 * ==================
 * EXPORTED COMPONENT
 * ==================
 */
function AddArtist() {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const id = getRandomId();

        const artistName = formData.get('artist');

        dispatch(addArtist({ id, artistName }));

        const inputEl = e.target.elements.artist;

        inputEl.value = '';
    };

    return (
        <div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label>
                    Enter Artist:
                    <input type="text" name="artist" />
                </label>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AddArtist;
