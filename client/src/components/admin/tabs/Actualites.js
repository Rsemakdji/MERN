import React, { Fragment, useEffect, useState } from 'react';
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

  const editItem = (editedElement) => {

    // editedElement.id
    // editedElement.title
    // editedElement.description
    
    //let element = data.filter(id === editedElement.id);
    // element.title = editedElement.title;
    // element.description = editedElement.description;
    
    // console.log(message);
  };

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
                      <td><UpdateModal></UpdateModal></td>
                      <td><DeleteModal validateChanges={editItem} id={item.id} title={item.title} description={item.description}></DeleteModal></td>
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