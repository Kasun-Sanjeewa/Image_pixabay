import React from 'react'

export default function ImageShow({ imageShowProp }) {
    return (
        <div >
            <a href={imageShowProp.largeImageURL}><img src={imageShowProp.webformatURL} alt={imageShowProp.tags} ></img></a>

        </div>
    )
}
