import React from 'react'
import { useSelector } from 'react-redux';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';

function GptSearch() {
    const store = useSelector((store) => store.gpt);
    console.log(store);
    return (
        <>
            {store.toggleGptStoreView ?
                <>
                    <GptSearchBar></GptSearchBar>
                    {/* <GptMovieSuggestions></GptMovieSuggestions> */}


                </>
                : ''}
        </>
    )
}

export default GptSearch