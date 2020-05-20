import React,{useState} from 'react';
import { Modal, Card, Button} from 'react-bootstrap';
import { MenuService } from '../../services/menu.service';

export const MenuPopup = () => {

    const [show,setShow] = useState({canShow:false});
    MenuService.getStatus().subscribe(status => setShow(status));
    const handleClose = () => {
        MenuService.updateStatus({canShow : false});
    }
    return (
        <Modal show={show.canShow}>
        <Modal.Body>
            <Card>
            <Card.Img variant="top" src="/food.jpg" />
            <Card.Body>
                <Card.Title>{show.name}</Card.Title>
                <Card.Text>
            {show.region}<br/>
            {show.description}
                </Card.Text>
                <Button className="right" variant="primary" onClick={handleClose}>Close</Button>
            </Card.Body>
            </Card>
        </Modal.Body>
      </Modal>
    )
}