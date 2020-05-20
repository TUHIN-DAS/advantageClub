import React from 'react';
import {Col,Card, Button} from 'react-bootstrap';
import { MenuService } from '../../services/menu.service';

export const MenuCard = (props) => {

    const handleClick = (event) => {
        window.open("/food.jpg");
    }

    const handleBuyNow = (event) => {
        event.stopPropagation();
        MenuService.updateStatus({...props.item,canShow : true});
    }

    return <Col onClick={handleClick} className="padding-top-15 clickable col-sm-3"><Card>
    <Card.Img variant="top" src="/food.jpg" />
    <Card.Body>
        <Card.Title>{props.item.name}</Card.Title>
        <Card.Text>
       {props.item.region}<br/>
       {props.item.description}
        </Card.Text>
        <Button className="right" variant="primary" onClick={handleBuyNow}>Buy Now</Button>
    </Card.Body>
    </Card>
    </Col>
}