import React, { useState } from 'react'
import Xf from './Xf';
import Nav from './Nav';
import './Home.css'


const Home = () => {

    // const [click, setClick] = useState(false);
    // const handleClick = () => setClick(!click);
    return (
        <>
            <Nav />
            <Xf />
        </>
    );

}

export default Home;
