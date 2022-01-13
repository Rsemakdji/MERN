import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';




function UpdateModal(props) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  //const id = useState(props.id);
  const [lastname, setLastname] = useState(props.lastname);
  const [firstname, setFirstname] = useState(props.firstname);
  const [email, setEmail] = useState(props.email);
  const [phone, setPhone] = useState(props.phone);
  const [address, setAddress] = useState(props.address || "");
  const [city, setCity] = useState(props.city);
  const [postal, setPostal] = useState(props.postal);



  const handleUpdate = async () => {
    const storedJwt = localStorage.getItem('token');
    const editedUser = {
      lastname,
      firstname,
      email,
      phone,
      address,
      city,
      postal,
    };
    
    if (storedJwt) {
      try {
        const config = {
          headers: { Authorization: `Bearer ${storedJwt}` }
        };
        axios
          .put("http://localhost:9001/api/users/" + props.id, editedUser, config )
          .then(res => {
            window.location.href = "/Admin";
            // alert(`tu as modifié ${props.lastname} ${props.firstname}`)
          });
      }
      catch (err) { console.log(props.id)
      }
    } else {
      window.location.href("/Admin")
    }
  }

  return (
    <>
      <Button variant="btn btn-primary" onClick={handleShow}>
        Modifier
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title >Edition de "<label className='text-primary'>{lastname} {firstname}</label>"</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleUpdate}>
            <div className="form-group">
              <label >Nom</label>
              <input type="text" className="form-control" id="nom" value={lastname} onChange={(e) => setLastname(e.target.value)}></input>
              <label>Prénom</label>
              <input type="text" className="form-control" id="nom" value={firstname} onChange={(e) => setFirstname(e.target.value)} ></input>
              <label>Email</label>
              <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} ></input>
              <label>Téléphone</label>
              <input type="text" className="form-control" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} ></input>
              <label>Adresse</label>
              <input type="text" className="form-control" id="address" value={address} onChange={(e) => setAddress(e.target.value)} ></input>
              <label>Ville</label>
              <input type="text" className="form-control" id="city" value={city} onChange={(e) => setCity(e.target.value)} ></input>
              <label>Code postal</label>
              <input type="text" className="form-control" id="postal" value={postal} onChange={(e) => setPostal(e.target.value)} ></input>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Annuler
          </Button>
          <Button variant="primary" onClick={() => { handleClose(); handleUpdate(); }}>
            Modifier
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateModal;