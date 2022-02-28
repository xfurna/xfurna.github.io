import React, { useEffect } from 'react'
import Xf from '../Xf/Xf';
import Nav from '../Nav/Nav';
import './Home.css'


const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    document.title = "Home"
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
