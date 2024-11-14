
import './imageList.css'
import React, { useState } from 'react';
import VideoModal from './VideoModel';

export default function VideoShow({ videoShowProp }) {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <div>
            <video controls
                onClick={openModal}
                style={{
                    cursor: 'pointer',
                    maxWidth: '100%',
                    height: 'auto',
                    borderRadius: '8px',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                }}>

                <source src={videoShowProp.videos.large.url} type='video/mp4' />
            </video>

            {isModalOpen && (
                <VideoModal videoURL={videoShowProp.videos.large.url} onClose={closeModal} />
            )}
        </div>
    );
}
