//import React, { Fragment, useEffect, useState } from 'react';
//import axios from 'axios'
// import './Admin.css';


// ligne 67 apres data .filter((val) => {
//  return val.lastname.toLowerCase().includes(searchTerm.toLowerCase());
//})
/*function AdminUsers() {
   const [data, setData] = useState([]);
   const [searchTerm, setSearchTerm] = useState("");

   //ressemble a didmount et didUpdate
   useEffect(() => {
       const fetchDatas = async () => {
           const result = await axios.get('http://localhost:9001/api/users',
           );
           setData(result.data)
       };
       fetchDatas();
   }, [])

   const handleSearchTerm = (e) => {
       let value = e.target.value;
       value.length > 1 && setSearchTerm(value);
   }

   const handleDelete = async (id) => {
       console.log(id);
       axios
           .delete(`http://localhost:9001/api/user/${id}`)
           .then(res => {
               console.log(res);
               console.log(res.data);
           });
   }

   const handleChange = async (id) => {
       console.log(id);

   }

   return (
       <div className="tableau-user">
           <h1>Modification utilisateur</h1>
           <input
               type="text"
               name="searchBar"
               id="searchBar"
               placeholder="rechercher"
               onChange={handleSearchTerm}
           >
           </input>
           <table border="1" className="table table-striped table-dark">
               <Fragment>
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
               </Fragment>
           </table>
       </div>
   )
}
export default AdminUsers; */