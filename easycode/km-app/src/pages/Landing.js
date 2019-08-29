import React from 'react';
import ReactDOM from 'react-dom';

const Landing = ({ fontSize }) => (
    <div>
        <h2 style={{ fontSize }}>
            Second component
        </h2>
        <h1 style={{ fontSize }}>
            First component
        </h1>
    </div>
);

export default Landing;