import './App.css';
import People from './components/People';

function App() {
  return (
    <div className="App">
      <People
        firstName={"Jane"}
        lastName={"Doe"}
        age={45}
        hairColor={"Black"}
      />
      <People
        firstName={"John"}
        lastName={"Smith"}
        age={88}
        hairColor={"Brown"}
      />
      <People
        firstName={"Millard"}
        lastName={"Fillmore"}
        age={50}
        hairColor={"Brown"}
      />
      <People
        firstName={"Maria"}
        lastName={"Smith"}
        age={62}
        hairColor={"Brown"}
      />
      
    </div>
  );
}

export default App;
