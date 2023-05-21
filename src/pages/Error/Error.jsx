import React from 'react';
import errorpage from "../../assets/errorpage.webp"
import useTitle from '../../hooks/useTitle';

const Error = () => {
    useTitle('LWT|ERROR');
    return (
        <div>
            <img style={{width:'50%'}} src={errorpage} alt="" />
          <h1>404 Error: Page not found</h1>
          <p>We're sorry, but the page you requested could not be found.</p>
        </div>
    );
};

export default Error;