import React from 'react';

const PeopleList = (props) => {
    const nameList = props.names.map((name, index) => {
       return <li key={index}>{name}</li>
    });
 
    return (
       <div>
          <h3>Exercise 2</h3>
          <ol>
             {nameList}
          </ol>
       </div>
    )
 }
 
 export default PeopleList;