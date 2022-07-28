import React from 'react';
import Search from "./Search"

function Home({allpets}) {
    return (
        <div>
        <h1 className='header'>Hello!</h1>
        <p id='sub-header'>Which patient are we working on today?</p>
        <Search pets={allpets}/>
        </div>
    )
};

export default Home;