import React, {  useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';



function DeleteModal({validateChanges, id, title, desccription}) {

    // validateChanges("pouet pouet");

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [data, setData] = useState([]);

    /*const [editedElement, setEditedElement] = useState({
        id: id,
        title: title,
        description: description,
    });*/

    
    useEffect(() => {
        const fetchDatas = async () => {
            const result = await axios.get('http://localhost:9001/api/actualites',
            );
            setData(result.data);
        };
        fetchDatas();
    }, [])
    
    
    const handleDelete = async (title) => {
        axios
            .delete(`http://localhost:9001/api/actualites${title}`)
            .then(res => {  
            });
    }

    /*const handleSubmit = (e) => {
        e.preventDefault();
        validateChanges(editedElement);
        handleClose();
    };*/

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

                {/* <form onSubmit={handleSubmit}>
                
                    <input type="text" value={editedElement.title}></input>
                    <input type="text" value={editedElement.description}></input>                    
                    
                    <button type="submit"></button>
                </form> */}

                  {
                  data.map((item, i) => 
                  <tr key={i}>
                      <td>{item.title}</td>
                  </tr>)
                  }   
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