import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

import axios from 'axios';
//import handleSubmit from '../formulaires/Ajout';

// transformer en class components like inscription 
// gerer la methode handleChange pour quelle soit bien calibrer sur ce qu'on vas push 
// this.bind important 
// gere le push en bd 
// Modal + form ajout fonctionnel requet avec postman pour verif 


function AddModal() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [data, setData] = useState({

    title: '',
    description: '',

  });

  const handleChange = (event) => {
    let title = event.target.value;
    let description = event.target.value;
  }
  console.log(setData);


  //ressemble a didmount et didUpdate
  function handleSubmit(data) {
    axios({
      method: 'post',
      url: 'http://localhost:9001/api/actualites',
      data: data
    })
      .then(function (response) {
        console.log(data)
        window.location.href = "/Admin";

      })
      .catch(function (err) {
        alert("Impossible de créer le compte, le mail existe déjà");
      });
  }


  return (
    <>
      <Button variant="btn btn-success" onClick={handleShow}>
        Ajouter
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nouvelle Actualites</Modal.Title>
        </Modal.Header>
        <div>
          <input type='text'  onChange={handleChange} placeholder='Nouveau titre'></input>
        </div>
        <Modal.Body>
          <div>
            <input type='text'  onChange={handleChange} placeholder='Nouvelles descriptions'></input>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={data, handleClose} type='submit'>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddModal;