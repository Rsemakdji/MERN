import React, { useEffect, useState } from 'react';
import AddModal from '../../modal/infos/AddModal';
import UpdateModal from '../../modal/infos/UpdateModal';
import DeleteModal from '../../modal/infos/DeleteModal';

import axios from 'axios'





function TabInfos () {

    const [data, setData] = useState([]);
    
    useEffect (() => {
      const fetchDatas = async () => {
      const result = await axios.get('http://localhost:9001/api/informations');
        setData(result.data);
      };
      fetchDatas();
    }, [])

    return(
      <div className="tableau-infos">
      <h1>Modification des informations </h1>
      <table border="1" className="table table-striped table-dark">
        <thead>
          <tr>
            <td>Titre</td>
            <td>Description</td>
            <td>Modifier</td>
            <td>Supprimer</td>
          </tr>
        </thead>
        <tbody>
          {
            data
              .map((item) =>
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td><div><UpdateModal id={item.id} title={item.title} description={item.description} ></UpdateModal></div></td>
                  <td><div><DeleteModal id={item.id} title={item.title} description={item.description}></DeleteModal></div></td>
                </tr>
              )
          }
        </tbody>
      </table>
      <AddModal></AddModal>
    </div> 
    )
  }
  export default TabInfos;