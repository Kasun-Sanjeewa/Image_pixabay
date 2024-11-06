import React from 'react'
import { useRef } from 'react';
import './imageList.css';

export default function SearchBar({ getResult }) {

    const InputuseRef = useRef(null);
    const handleForm = (e) => {

        e.preventDefault();
        const term = InputuseRef.current.value;
        getResult(term);
    }

    return (
        <div >
            <form onSubmit={handleForm} id='App-header'>
                <input ref={InputuseRef} placeholder='Type Here' ></input>
                <button ><i class="fa-solid fa-magnifying-glass" id='serchbtn' /></button>
            </form>


        </div>
    )
}
