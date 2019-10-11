import React, {useState, useEffect} from 'react';
import axios from 'axios';
import StarwarsCard from "./components/StarwarsCard";
import './App.css';
import {Container, Row} from 'reactstrap';
const App = () => {
const [swData, setData] = useState([]);  
useEffect(()=>{
  axios
    .get("https://swapi.co/api/people/")
    .then(response => {
      console.log(response)
      setData(response.data.results);
    })
    .catch(error => {
      console.log(error);
    })
}, [])  

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <Container>
    <Row>
      <h1 className="Header">React Wars</h1>

          {swData.map(char => {
            return(
          <StarwarsCard key={char.url}
                        name={char.name}
                        birth={char.birth_year}
                        eye={char.eye_color}
                        films={char.films}
                        gender={char.gender}
                        hair={char.hair_color}
                        height={char.height}
                        homeworld={char.homeworld}
                        mass={char.mass}
                        skin={char.skin_color}
                        species={char.species}
                        starships={char.starships}
                        vehicles={char.vehicles}
                        />
            )

            })}
        </Row>
      </Container>

  );
}

export default App;
