import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {

    

    return(
        <div className="landing-page">
            <h1>Welcome to My React App</h1>
            <p>This is the landing page of the application.</p>
            <Link to="/home">
                <button>Go to Home Page</button>
            </Link>
        </div>






    );

}

