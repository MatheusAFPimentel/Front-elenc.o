import React from 'react';
import './card.css';
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';

function CardsAtores(props) {
    return(
        <div>
            <Card className='card'>
                <CardImg className='img_card' src={props.actors.avatar} alt='foto do actors'></CardImg>
                <CardBody>
                <CardTitle><h2>{props.actors.name}</h2></CardTitle>
                <CardText><p>Idade: {props.actors.age}
                <br/>
                Gênero: {props.actors.sex}
                <br/>
                DRT: {props.actors.drt}
                <br/>
                Atuação: {props.actors.genre}
                <br/>
                Cachê: {props.actors.salary}
                </p></CardText>
                <Button className='botao_card'>Reservar</Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default CardsAtores;