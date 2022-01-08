import React, { useState } from 'react';
import {Modal, Button } from 'react-bootstrap';




function UpdateModal() {
      const [show, setShow] = useState(false);
    
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

    
      return (
        <>
          <Button variant="btn btn-primary" onClick={handleShow}>
            Modifier
          </Button>
          {/* <form onSubmit={handleSubmit}>
                
                    <input type="text" value={editedElement.title}></input>
                    <input type="text" value={editedElement.description}></input>                    
                    
                    <button type="submit"></button>
                </form> */}
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body> </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }

    export default UpdateModal;