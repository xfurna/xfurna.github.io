import React from 'react'
import Xf from './Xf';
import Nav from './Nav';
import './Home.css'


const Home = () => {

    return (
        <>
            <Nav />
            <div style={{ height: '101vmin' }}>
                <Xf />
            </div>
        </>
    );

}

export default Home;
