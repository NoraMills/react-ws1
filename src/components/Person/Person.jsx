import React from 'react';

const Person = (props) => {

    return (
        <div>
            <h3>Exercise 1</h3>
            <h1>{props.firstName} {props.lastName}</h1>
        </div>
    )
}

export default Person;