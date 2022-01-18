import React, { useEffect, useState } from 'react';
import DeleteModal from '../../modal/users/DeleteModal';
import UpdateModal from '../../modal/users/UpdateModal';
import axios from 'axios';





function TabUser() {

    const [data, setData] = useState([]);

    async function fetchData() {
        const storedJwt = localStorage.getItem('token');
        if (storedJwt) {
            try {
                const config = {
                    headers: { Authorization: `Bearer ${storedJwt}` }
                }
                const result = await axios.get('http://localhost:9001/api/users/', config);
                setData(result.data);
            }
            catch (err) {
                // TODO : gérer les cas d'erreur
            }
        } else {
            window.location.href("/Admin")
        }
    }

    useEffect(() => {
        fetchData();
    }, []);


    return (



        <div className="tableau-infos">
            <h1>Modification des utilisateurs </h1>
            <table border="1" className="table table-striped table-dark">
                <tbody>
                    <tr>   
                        <td>Nom</td>
                        <td>Prenom</td>
                        <td>Email</td>
                        <td>Telephone</td>
                        <td>Adresse</td>
                        <td>Villes</td>
                        <td>Code Postal</td>
                        <td>Admin </td>
                        <td>Modifier</td>
                        <td>Supprimer</td>
                    </tr>
                    {
                        data
                            .map((item) =>
                                <tr key={item.id}>
                                    <td>{item.lastname}</td>
                                    <td>{item.firstname}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.address}</td>
                                    <td>{item.city}</td>
                                    <td>{item.postal}</td>
                                    <td>{item.isAdmin && "X"}</td>
                                    <td>
                                        <UpdateModal
                                            id={item.id}
                                            lastname={item.lastname}
                                            firstname={item.firstname}
                                            email={item.email}
                                            phone={item.phone}
                                            address={item.address}
                                            city={item.city}
                                            postal={item.postal}
                                        ></UpdateModal>
                                    </td>
                                    <td>
                                        <DeleteModal
                                            id={item.id}
                                            lastname={item.lastname}
                                            firstname={item.firstname}
                                        ></DeleteModal>
                                    </td>
                                </tr>
                            )
                    }
                </tbody>
            </table>
        </div>
    )
}
export default TabUser;