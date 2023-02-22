import React from 'react'
import './PostImage.css'

export default function PostImage(props) {
    return (
        <>
        <img src={props.url} alt='' className='postImg'/>
        </>
    );
}