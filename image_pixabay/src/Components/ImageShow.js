
import './imageList.css'
import React, { useState } from 'react';
import Modal from './Modal';

export default function ImageShow({ imageShowProp }) {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <div>
            <img
                src={imageShowProp.webformatURL}
                alt={imageShowProp.tags}
                onClick={openModal}
                style={{
                    cursor: 'pointer',
                    maxWidth: '100%',
                    height: 'auto',
                    borderRadius: '8px',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                }}
            />
            {isModalOpen && (
                <Modal imageURL={imageShowProp.largeImageURL} onClose={closeModal} />
            )}
        </div>
    );
}
