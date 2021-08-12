import React from 'react';
import './App.css';
import Person from './components/Person/Person';
import PersonList from './components/People/People';
import Superhero from './components/Superhero/Superhero';
import AlertUser from './components/Alert/AlertUser';

function App() {

  const state = {
    person: {
      firstName: 'Reggie',
      lastName: 'White'
    },

    names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly'],


    superheroes: [
      {
          superheroId: 1,
          name: 'Batman',
          primaryAbility: 'Wealthy',
          secondaryAbility: 'Rich'
      },
      {
          superheroId: 2,
          name: 'Superman',
          primaryAbility: 'Super strength',
          secondaryAbility: 'Fly'
      },
      {
          superheroId: 3,
          name: 'Spiderman',
          primaryAbility: 'Spider senses',
          secondaryAbility: 'Shoots web'
      }
  ]
}

  const alertHere = () => {
    alert('devCodeCamp');
  } 

  return (
    <div className="container-fluid">
      <Person firstName={state.person.firstName} lastName={state.person.lastName} />
      <PersonList names={state.names} />
      <Superhero superheroes={state.superheroes} />
      <div className="button1"><AlertUser popAlert={alertHere}/></div>
      
    </div>
    
  );

}
export default App;
