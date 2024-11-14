import React from 'react'
import VideoShow from './VideoShow';


export default function VideoList({ videoListProp }) {
    const videoRender = videoListProp.map((videoMapVariable) => {

        return <VideoShow key={videoMapVariable.id} videoShowProp={videoMapVariable} />
    })
    return (
        <div className='VideoimageList'  >
            {videoRender}
        </div>
    )
}
