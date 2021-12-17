import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';


function TabUser() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchDatas = async () => {
            const result = await axios.get('http://localhost:9001/api/users',
            );
            setData(result.data);
        };
        fetchDatas();
    }, [])

    const handleDelete = async (id) => {
        console.log(id);
        axios
            .delete(`http://localhost:9001/api/users/${id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
                console.log(res.id);
            });
    }
    const handleChange = async (id) => {
        console.log(id);

    }
    return (
        <Table striped bordered hover>
            <tbody>
                <tr>
                    <td>nom</td>
                    <td>prenom</td>
                    <td>email</td>
                    <td>telephone</td>
                    <td>adresse</td>
                    <td>villes</td>
                    <td>code postal</td>
                    <td>modifier</td>
                    <td>supprimer</td>
                </tr>
                <Fragment>
                    {
                        data
                            .map((item, i) =>
                                <tr key={i}>
                                    <td>{item.lastname}</td>
                                    <td>{item.firstname}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.adress}</td>
                                    <td>{item.city}</td>
                                    <td>{item.postal}</td>
                                    <td><button className="btn btn-primary" onClick={() => { handleChange(item.id) }}>modifier</button></td>
                                    <td><button className="btn btn-danger" onClick={() => { handleDelete(item.id) }}>supprimer</button></td>
                                </tr>
                            )
                    }
                </Fragment>
            </tbody>
        </Table>
    )
}
export default TabUser;