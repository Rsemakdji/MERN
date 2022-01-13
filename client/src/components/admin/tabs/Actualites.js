import React, { useEffect, useState } from 'react';
import AddModal from '../../modal/actualites/AddModal';
import UpdateModal from '../../modal/actualites/UpdateModal';
import DeleteModal from '../../modal/actualites/DeleteModal';
import axios from 'axios';

function TabActu() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDatas = async () => {
      const result = await axios.get('http://localhost:9001/api/actualites');
      setData(result.data);

    };
    fetchDatas();
  }, [])

  return (
    <div className="tableau-infos">
      <h1>Modification des actualites</h1>
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
                  <td><UpdateModal id={item.id} title={item.title} description={item.description} ></UpdateModal></td>
                  <td><DeleteModal id={item.id} title={item.title}></DeleteModal></td>
                </tr>
              )
          }
        </tbody>
      </table>
      <AddModal></AddModal>
    </div>
  )
}
export default TabActu;