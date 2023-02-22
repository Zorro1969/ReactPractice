import React from 'react';
import './Header.css';

export default function Header(props) {
    return (
        <header >
            <h1>{props.title}</h1>
            <img src={props.url} alt='header-img'/>
        </header>
    );
}