import React, { Fragment, useEffect, useState } from 'react';
import AddModal from '../../modal/AddModal.js';
import UpdateModal from '../../modal/UpdateModal.js';
import DeleteModal from '../../modal/DeleteModal.js';
import axios from 'axios';




function TabActu() {
  const [data, setData] = useState([]);

  //ressemble a didmount et didUpdate
  useEffect(() => {
    const fetchDatas = async () => {
      const result = await axios.get('http://localhost:9001/api/actualites',
      );
      setData(result.data);
      //console.log(data);
    };
    fetchDatas();
  }, [])

  

  return (
    <div className="tableau-infos">
      <h1>Modification infos</h1>
      <table border="1" className="table table-striped table-dark">
        <Fragment>
          <tbody>
            <tr>
              <td>id</td>
              <td>title</td>
              <td>description</td>
              <td>Ajouter</td>
              <td>modifier</td>
              <td>supprimer</td>
            </tr>
            <Fragment>
              {
                data
                  .map((item, i) =>
                    <tr key={i}>
                      <td>{item.id}</td>
                      <td>{item.title}</td>
                      <td>{item.description}</td>
                      <td><AddModal></AddModal></td>
                      <td><UpdateModal></UpdateModal></td>
                      <td><DeleteModal></DeleteModal></td>
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
export default TabActu;