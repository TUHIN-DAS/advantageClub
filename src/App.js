import React, {useEffect, useState} from 'react';
import { Container} from 'react-bootstrap';
import { Loader } from './components/loader/loader';
import { Menu } from './components/menu/menu';
import { MenuPopup } from './components/menupopup/menupopup';
import './App.css';

function App() {
  const [items, setItems] = useState(null);
  const ITEM_URL = "/mockdata.json"; 
  useEffect(() => {
    if(items !== null) return;
    fetch(ITEM_URL) 
    .then(response => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    }).then((data) => setItems(data) )
    .catch((err) => {
        console.log(err);
    })
  });

  return (
      <Container fluid>
       {(items === null) ? <Loader/> :  <Menu items={items}/>}
       <MenuPopup/>
      </Container>
      
  );
}

export default App;
