import React, {useState, useEffect} from 'react';
import {
    Card, 
    CardText, 
    CardBody,
    CardTitle, 
    CardSubtitle,
    Col
  } from 'reactstrap';
import axios from 'axios';
import MovieInfo from './CharacterInfo/MovieInfo';
import ShipInfo from './CharacterInfo/ShipInfo';
import VehicleInfo from "./CharacterInfo/VehicleInfo";

const StarwarsCard = props =>  {

//Grabbing All Film Data
const [movie, setMovie] = useState([]);
useEffect(()=>{
    Promise.all(
    props.films.map(function(element){
        return axios.get(element)
            .then(response =>{
                return response.data.title;
            })
    })
    )    
    .then(response1 => {
        setMovie(response1);
    })
}, []);

//Grabbing all Starship Data
const [ships, setShip] = useState([]);
useEffect(()=>{
        Promise.all(
        props.starships.map(function(element){
            return axios.get(element)
                .then(response =>{
                    return response.data.name;
                })
        })
        )   
        .then(response =>{
            if(response.length === 0){
                setShip(["None"]);
            }else{
                setShip(response);
            }
        })
}, []);

//Grabbing all Vehicle Data
const [cars, setCars] = useState([]);
useEffect(()=>{
    Promise.all(
    props.vehicles.map(function(element){
        return axios.get(element)
            .then(response =>{
                return response.data.name;
            })
    })
    )   
    .then(response1 =>{
        if(response1.length === 0){
            setCars(["None"]);
        }else{
            setCars(response1);
        }
    })
}, []);

//Grabbing all Race Data
const [race, setRace] = useState('');
useEffect(()=>{
    props.species.map(function(element){
    axios
    .get(element)    
    .then(response => {

        setRace(response.data.name)
        })
    })
}, []);

//Grabbing Homeworld Data
const [home, setHome] = useState('');
useEffect(()=>{
    axios
    .get(props.homeworld)    
    .then(response => {
        setHome(response.data.name)
        })
}, []);


//Returning all Data into Cards
    return (
        <Col xs="6" sm="4" >
            <Card>
            <CardBody>
                <CardTitle>{props.name}</CardTitle>
                <CardSubtitle>Born {props.birth}</CardSubtitle>
                <CardText>
                    Films: {movie.map(item => (
                        <MovieInfo key={item} movie={item}/>
                    ))}               
                </CardText>
                <CardSubtitle>Gender: {props.gender}</CardSubtitle>
                <CardSubtitle>Height: {props.height}</CardSubtitle>
                <CardSubtitle>Mass: {props.mass}</CardSubtitle>
                <CardSubtitle>Eye Color: {props.eye}</CardSubtitle>
                <CardSubtitle>Hair Color: {props.hair}</CardSubtitle>
                <CardSubtitle>Skin Color: {props.skin}</CardSubtitle>
                <CardSubtitle>Species: {race}</CardSubtitle>
                <CardSubtitle>Homeworld: {home}</CardSubtitle>
                <CardText>
                    Starships: 
                    {ships.map(item => (
                        <ShipInfo key={item} ships={item} />
                    ))}
                </CardText>
                <CardText>
                    Vehicles: {cars.map(item => (
                        <VehicleInfo key={item} cars={item} />
                    ))}
                    </CardText>
            </CardBody>
            </Card>
        </Col>

    )
};
export default StarwarsCard;