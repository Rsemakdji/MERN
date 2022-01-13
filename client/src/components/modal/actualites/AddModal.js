import React, { Fragment, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';



function AddModal() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function handleSubmit() {
    

    const actualites = { title, description };

    axios({
      method: 'post',
      url: 'http://localhost:9001/api/actualites',
      data: actualites
    })
      .then(res => {
        alert("ajout avec succes ");
        window.location.href = "/Admin";
        //console.log(res);
      })
      .catch(function (err) {
        alert("je ne peux pas crée une nouvelles actualites");
      });
  }

  return (
    <Fragment>
      <Button variant="btn btn-success" onClick={handleShow}>
        Ajouter
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nouvelle Actualites</Modal.Title>
        </Modal.Header>
        <div>
          <input type='text' onChange={(e) => setTitle(e.target.value)} placeholder='Nouveau titre'></input>
        </div>
        <Modal.Body>
          <Fragment>
            <div>
              <input type='text' onChange={(e) => setDescription(e.target.value)} placeholder='Nouvelles descriptions'></input>
            </div>
          </Fragment>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Annuler
          </Button>
          <Button variant="primary" onClick={() => { handleClose(); handleSubmit(); }} type='submit'>
            Créer
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}

export default AddModal;