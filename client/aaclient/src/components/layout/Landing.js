import React from 'react';
import {Link} from "react-router-dom";

 const Landing = () => {
    return (
        <section className="landing">
        <div className="dark-overlay">
            <div className="landing-inner">
            <h1 className="x-large">Employer Connector</h1>
            <p className="lead">
            Contractor got pull to employer’s preferred contractor list and stand-by for future actual job posting
            </p>
            <p className="lead">
            when employer actually has a job opening and need to hire a contractor for specific job/task
            </p>
            <p className="lead">
            when contractor is actually working for the employer
            </p>
            <div className="buttons">
                <Link to="/Register" className="btn btn-primary">Sign Up</Link>
                <Link to="/Login" className="btn btn-light">Login</Link>
            </div>
            </div>
        </div>
        </section>
    )
}

export default Landing;