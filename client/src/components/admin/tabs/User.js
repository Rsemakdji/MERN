import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import DeleteModal from '../../modal/DeleteModal';



function TabUser() {

    const [data, setData] = useState([]);
    
    async function fetchData(){
        const storedJwt = localStorage.getItem('token');
        if (storedJwt) {
            try {
                const config = {
                    headers: { Authorization: `Bearer ${storedJwt}` }
                };
                const result = await axios.get('http://localhost:9001/api/users', config);
                setData(result.data);
            }
            catch (err) {
                // TODO : gérer les cas d'erreur
            }
        } else {
            window.location.href("/Connexion")
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    
    return (
        <Table striped bordered hover>
            <tbody>
                <tr>
                    <td>id</td>
                    <td>nom</td>
                    <td>prenom</td>
                    <td>email</td>
                    <td>telephone</td>
                    <td>adresse</td>
                    <td>villes</td>
                    <td>code postal</td>
                    <td>admin ?</td>
                    <td>modifier</td>
                    <td>supprimer</td>
                </tr>
                <Fragment>
                    {
                        data
                            .map((item, i) =>
                                <tr key={i}>
                                    <td>{item.id}</td>
                                    <td>{item.lastname}</td>
                                    <td>{item.firstname}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.adress}</td>
                                    <td>{item.city}</td>
                                    <td>{item.postal}</td>
                                    <td>{item.isAdmin && "X"}</td>
                                    <td>modifier</td>
                                    <DeleteModal></DeleteModal>
                                </tr>
                            )
                    }
                </Fragment>
            </tbody>
            <br></br>
            <button class="btn btn-success">Ajouter</button>{/* mettre une redirection sur formulaires inscription  */}
        </Table>
    )
}
export default TabUser;