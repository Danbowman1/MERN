import './App.css';
import People from './Components/People';

function App() {


const people = [
  {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 45,
    hairColor: 'Black'
  },
  {
    firstName: 'John',
    lastName: 'Smith',
    age: 88,
    hairColor: 'Brown'
  }
]

  return (
    <div className="App">


    {
      people.map((person, index) => {
        return (
          <People
          key={index}
          lastName={person.lastName}
          firstName={person.firstName}
          age={person.age}
          hairColor={person.hairColor}
          />
        )
      })
    }
    </div>
    );
}

export default App;
