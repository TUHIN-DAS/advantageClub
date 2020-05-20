import React from 'react';
import { Row } from 'react-bootstrap';
import {MenuCard} from '../menucard/menucard';

export const Menu = (props) => {

    const fillCards = () => {
        return props.items.map(item => 
            <MenuCard item={item}/>
            )
    }

   return <Row>
        {fillCards()}
    </Row>
   
}