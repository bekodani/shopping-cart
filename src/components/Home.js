import React from 'react';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <>
        <Helmet>
            <title>{ 'AFC Richmond Online Shop' }</title>
        </Helmet>
        <div className="background-minus-nav">
            <div className="background-wrapper">
                <h2>Welcome to AFC Richmond's Online Store!</h2>
            </div>

        </div>
        </>
    )
}

export default Home
