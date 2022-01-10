import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';




function UpdateModal(props) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);

  const handleUpdate = async () => {
     const res = await axios.put("http://localhost:9001/api/informations/"+ props.id, { title, description });
     alert('information modfié avec succes ')
     window.location.href ="/Admin"
  };
  

  return (
    <>
      <Button variant="btn btn-primary" onClick={handleShow}>
        Modifier 
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edition de "{title}"</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleUpdate}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}></input>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} ></input>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Annuler
          </Button>
          <Button variant="primary" onClick={handleClose, handleUpdate}>
            Modifier
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateModal;