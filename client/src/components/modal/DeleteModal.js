import React, {  useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';

//hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh

function DeleteModal() {

   
// composant modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
// composant de données 
    const [data, setData] = useState([]);

    /*const [editedElement, setEditedElement] = useState({
        id: id,
        title: title,
        description: description,
    });*/
    
    /*const handleSubmit = (e) => {
        e.preventDefault();
        validateChanges(editedElement);
        handleClose();
    };*/
    
    useEffect(() => {
       
        const fetchDatas = async () => {
            const result = await axios.get('http://localhost:9001/api/actualites',
            );
            setData(result.data);
        };
        fetchDatas();
    }, [])
    
    
    const handleDelete = async (id) => {
        const storedJwt = localStorage.getItem('token');
        const config = {
            headers: { Authorization: `Bearer ${storedJwt}` }
        };
        axios
            .delete(`http://localhost:9001/api/users/${id}`, config)
            .then(res => {
                // trouver comment mettre le prenom et nom dans le message d'erreur !
                alert(`tu as supprimer ${id}`)
                window.location.href = "/Admin";
            });
    }


    return (
        <>
            <Button variant="btn btn-danger" onClick={handleShow}>
                Supprimer
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title> Suppression </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Retour
                    </Button>
                    <Button variant="btn btn-danger" onClick={handleDelete}>
                        Supprimer
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeleteModal;