import React from 'react';
import './imageList.css';

export default function Modal({ imageURL, onClose }) {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <img src={imageURL} alt="Large view" className="modal-image" />
            </div>
        </div>
    );
}
