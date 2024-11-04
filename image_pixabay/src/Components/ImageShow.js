import React from 'react'

export default function ImageShow({ imageShowProp }) {
    return (
        <div >
            <img src={imageShowProp.webformatURL} alt={imageShowProp.tags} ></img>
        </div>
    )
}
