import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';

function DeleteModal(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [title] = useState(props.title);

    //const id = useState(props.id);

    const handleDelete = () => {
        axios
            .delete(`http://localhost:9001/api/actualites/${props.id}`)
            .then(res => {
                window.location.href = "/Admin";
                alert(`tu as supprimer ${props.title}`)
            });
    };

    return (
        <>
            <Button variant="btn btn-danger" onClick={handleShow}>
                Supprimer
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title> Suppression de "{ title }" </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h2>Êtes vous sur de vouloir supprimer :<span className='text-danger'> { title } </span> ? </h2>
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