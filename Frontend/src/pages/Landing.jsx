import React, { PureComponent } from 'react';
import "../style/Landing.css"
import { Link } from 'react-router-dom';

function Landing() {
    return (
    <div id="video-body">
    <div className="container">
        <div className="row justify-content-center">
        <div className="col-lg-10">
            <div className="card">
            <div className="row g-0">
                <div className="col-md-6 left-panel">
                <h1>VideoConnect</h1>
                <p className="mt-3">Crystal-clear video meetings. Anytime. Anywhere.</p>

                <div className="feature">
                    <i className="material-icons">videocam</i>
                    <span>HD Video & Audio</span>
                </div>
                <div className="feature">
                    <i className="material-icons">lock</i>
                    <span>Secure & Encrypted</span>
                </div>
                <div className="feature">
                    <i className="material-icons">group</i>
                    <span>Meet with Anyone</span>
                </div>
                </div>
                <div className="col-md-6 right-panel">
                    <h2 className="fw-bold">Get Started</h2>
                    <p className="text-muted">Join meetings instantly or create an account for more features.</p>

                    <div className="d-grid gap-3 mt-4">
                        <Link className="btn btn-primary" to="/auth">
                        <i className="material-icons align-middle me-1">rocket_launch</i>
                        Get Started
                        </Link>

                        <Link className="btn btn-outline-secondary" to="/auth">
                        <i className="material-icons align-middle me-1">login</i>
                        Login
                        </Link>

                        <Link className="btn btn-outline-secondary" to="/auth">
                        <i className="material-icons align-middle me-1">person_add</i>
                        Sign Up
                        </Link>

                        <Link className="btn btn-guest" to="/abcd">
                        <i className="material-icons align-middle me-1">person</i>
                        Continue as Guest
                        </Link>
                    </div>

                    <p className="text-center text-muted mt-4" style={{fontSize: "0.9rem"}}>
                        No downloads required • Works in your browser
                    </p>
                </div>

            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
     );
}

export default Landing;