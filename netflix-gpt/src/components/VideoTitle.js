import React from 'react'

function VideoTitle(props) {
    props = props.movie;
    return (
        <div className='w-screen aspect-video px-20 absolute text-white bg-gradient-to-r from-black'>
            <h1 className='pt-[25%] text-6xl font-bold mb-5'>{props.title}</h1>
            <p className='w-1/3'>{props.overview}</p>
            <div className='mt-8' >
                <button className='w-20 bg-white p-2 text-black mr-6 rounded-md'>
                    Play
                </button>
                <button className='w-30 bg-gray-500 p-2 text-white rounded-md'>
                    Show More!
                </button>
            </div>
        </div>
    )
}

export default VideoTitle