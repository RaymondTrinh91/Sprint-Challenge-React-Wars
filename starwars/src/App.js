import React, {useState, useEffect} from 'react';
import axios from 'axios';
import StarwarsCard from "./components/StarwarsCard";
import './App.css';
import {Container, Row} from 'reactstrap';

const App = () => {
const [swData, setData] = useState([]);
const [ApiUrl, setApiUrl] = useState("https://swapi.co/api/people/")
const [pageNext, setPageNext] = useState("");
const [pagePrevious, setPagePrevious] = useState("");
useEffect(()=>{
  axios
    .get(ApiUrl)
    .then(response => {
      console.log(response)
      setData(response.data.results);
      setPageNext(response.data.next);
      setPagePrevious(response.data.previous);
    })
    .catch(error => {
      console.log(error);
    })
}, [ApiUrl])  

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <div>
      <h1 className="Header">React Wars</h1>
      </div>
      <div>
        <button onClick={()=> setApiUrl(pagePrevious)}>Previous</button>
        <button onClick={()=> setApiUrl(pageNext)}>Next</button>
      </div>
      <Container>
        <Row>
          {swData.map(char => (
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

        ))}
        </Row>
      </Container>

    </div>
  );
}

export default App;
