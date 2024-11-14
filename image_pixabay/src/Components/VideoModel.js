import React from 'react';
import './imageList.css';

export default function VideoModal({ videoURL, onClose }) {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="Videomodal-content" onClick={(e) => e.stopPropagation()}>
                <video controls className="modal-image">
                    <source src={videoURL} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}
