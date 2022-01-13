import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';

function DeleteModal(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // je récupere mes props 
    const [lastname] = useState(props.lastname);
    const [firstname] = useState(props.firstname);

    const handleDelete = () => {
        const storedJwt = localStorage.getItem('token');
        if (storedJwt) {
            try {
                const config = {
                    headers: { Authorization: `Bearer ${storedJwt}` }
                };
                axios
                    .delete(`http://localhost:9001/api/users/${props.id}`, config)
                    .then(res => {
                        window.location.href = "/Admin";
                        alert(`tu as supprimer ${props.lastname} ${props.firstname}`)
                    });
            }
            catch (err) {
            }
        } else {
            window.location.href("/Admin")
        }
    }
    return (
        <>
            <Button variant="btn btn-danger" onClick={handleShow}>
                Supprimer
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title> Suppression de "{lastname} {firstname}" </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h2>Êtes vous sur de vouloir supprimer :
                        <span className='text-danger'> {lastname} {firstname} </span> ?
                    </h2>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Retour
                    </Button>
                    <Button variant="btn btn-danger" onClick={() => { handleClose(); handleDelete(); }}>
                        Supprimer
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeleteModal;