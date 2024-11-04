import React from 'react'
import { useRef } from 'react';
import searchImages from '../api';
import { useState } from 'react';
import ImageList from './ImageList';

export default function SearchBar() {

    const InputuseRef = useRef(null);
    const handleForm = (e) => {

        e.preventDefault();
        const term = InputuseRef.current.value;
        imageHandle(term);
    }



    const [imageList, setImage] = useState([]);
    const imageHandle = async (term) => {
        const result = await searchImages(term);

        setImage(result);

    }

    return (
        <div className='App-header'>
            <form onSubmit={handleForm}>
                <input ref={InputuseRef} placeholder='Type Here' ></input>
                <button >Search</button>
            </form>

            <ImageList imageListProp={imageList} />
        </div>
    )
}
