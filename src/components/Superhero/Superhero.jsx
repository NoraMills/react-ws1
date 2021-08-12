import React from 'react'
import './Superhero.css';

const Superhero = (props) => {
   const superheroTableRows = props.superheroes.map((superhero) => {
      return <tr key={superhero.superheroId}>
         <td>{superhero.superheroId}</td><td>{superhero.name}</td><td>{superhero.primaryAbility}</td><td>{superhero.secondaryAbility}</td></tr>
   })

   return (
      <div>
        <h3>Exercise 4</h3>
         <table>
            <tr>
               <th>ID</th><th>Name</th><th>Primary Abiliity</th><th>Secondary Ability</th>
            </tr>
            {superheroTableRows}
         </table>
      </div>
   )
}

export default Superhero;