import React, { useState } from 'react'
import { imageCDN } from '../utils/constant'

const MovieCard = ({ path }) => {

    return (
        <div className='m-3 cursor-pointer'>
            <img className='max-w-40' src={imageCDN + path}></img>
        </div>
    )
}

export default MovieCard