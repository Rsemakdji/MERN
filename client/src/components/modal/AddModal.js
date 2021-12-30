import React, { useState } from 'react';
import {Modal, Button } from 'react-bootstrap';
import AjouterActu from '../formulaires/Ajout';
//import handleSubmit from '../formulaires/Ajout';




function  AddModal () {
      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
      console.log(AjouterActu)

    
      

    
      return (
        <>
          <Button variant="btn btn-success" onClick={handleShow}>
            Ajouter
          </Button>
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title> <h1> Ajoutons une actualités </h1></Modal.Title>
            </Modal.Header>
            <Modal.Body> 
                <AjouterActu></AjouterActu> </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose} type='submit'>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }

    export default  AddModal;