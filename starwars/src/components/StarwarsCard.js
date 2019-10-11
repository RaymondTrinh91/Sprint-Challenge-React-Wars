import React, {useState, useEffect} from 'react';
import {
    Card, 
    CardText, 
    CardBody,
    CardTitle, 
    CardSubtitle,
    CardColumns,
    Container,
    Row
  } from 'reactstrap';
import axios from 'axios';
import MovieInfo from './CharacterInfo/MovieInfo';


const StarwarsCard = props =>  {
const [movie, setMovie] = useState('');
useEffect(()=>{
    props.films.map(function(element){
    axios
    .get(element)    
    .then(response => {
        setMovie(response.data)
        })
    })
}, []);

const [ships, setShip] = useState('');
useEffect(()=>{
    props.starships.map(function(element){
    axios
    .get(element)    
    .then(response => {
        setShip(response.data.name)
        })
    })
}, []);

const [cars, setCars] = useState('');
useEffect(()=>{
    props.vehicles.map(function(element){
    axios
    .get(element)    
    .then(response => {
        setCars(response.data.name)
        })
    })
}, []);

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

const [home, setHome] = useState('');
useEffect(()=>{
    axios
    .get(props.homeworld)    
    .then(response => {
        console.log(response);
        setHome(response.data.name)
        })
}, []);
    return (
        <Container>
        <Row>
        <CardColumns>
            <Card>
            <CardBody>
                <CardTitle>{props.name}</CardTitle>
                <CardSubtitle>Born {props.birth}</CardSubtitle>
                <CardText>
                    {<MovieInfo movie={movie.title}/>}               
                </CardText>
                <CardSubtitle>Gender: {props.gender}</CardSubtitle>
                <CardSubtitle>Height: {props.height}</CardSubtitle>
                <CardSubtitle>Mass: {props.mass}</CardSubtitle>
                <CardSubtitle>Eye Color: {props.eye}</CardSubtitle>
                <CardSubtitle>Hair Color: {props.hair}</CardSubtitle>
                <CardSubtitle>Skin Color: {props.skin}</CardSubtitle>
                <CardSubtitle>Species: {race}</CardSubtitle>
                <CardSubtitle>Homeworld: {home}</CardSubtitle>
                <CardText>Starships: {ships}</CardText>
                <CardText>Vehicles: {cars}</CardText>
            </CardBody>
            </Card>
        </CardColumns>
                </Row>
                </Container>
    )
};
export default StarwarsCard;