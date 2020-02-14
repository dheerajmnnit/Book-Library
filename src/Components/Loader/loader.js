import React, { Component } from './../../../node_modules/react';
import './style.scss'
const loader = props => {
    return <div className="showbox">
        <div className="loader">
            <svg className="circular" viewBox="25 25 50 50">
                <circle className="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" />
            </svg>
        </div>
    </div>;
};

export default loader;
