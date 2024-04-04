import React from 'react';
import './titlestyle.css';

const Title = (props) => {
    return (
        <h1>Name: {props.firstName} Last Name: {props.lastName}</h1>
    );
}

export default Title;