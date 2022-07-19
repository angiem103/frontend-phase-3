import React from 'react';
import Search from "./Search"

function Home({allpets}) {
    return (
        <Search pets={allpets}/>
    )
};

export default Home;