import React from 'react';






function TabSection () {
    // const [data, setData] = useState([]);
    
  
    // //ressemble a didmount et didUpdate
    // useEffect (() => {
    //   const fetchDatas = async () =>{
    //   const result = await axios.get('http://localhost:9001/api/sections',
    //     );
    //     setData(result.data);
    //     //console.log(result.data);
    //   };
    //     fetchDatas();
    // }, [])
  
    
  
    // const handleDelete = async (title) => {
    //   //console.log(title);
    //   axios
    //     .delete(`http://localhost:9001/api/sections${title}`)
    //     .then(res => {
    //      // console.log(res);
    //       //console.log(res.data);
    //     });
    // }
  
    // const handleChange = async (id) => {
    //   console.log(id);
      
   // }
  
    return(
      <div className="tableau-infos">
        <h1>Modification de la section</h1>
          {/* <table border="1" className="table table-striped table-dark">
            <Fragment>
              <tbody>
                  <tr>
                      <td>section</td>
                      <td>horaires</td>  
                      <td>professeur</td> 
                      <td>tarifs</td> 
                      <td>modifier</td> 
                      <td>supprimer</td> 
                  </tr>
                  <Fragment>
                    {
                      data
                        .map((item,i)=>
                          <tr key ={i}>
                            <td>{item.name}</td> 
                            <td>{item.timetable}</td>  
                            <td>{item.professor}</td> 
                            <td>{item.tarif}</td>  
                            <td><button className="btn btn-primary" onClick={() => { handleChange(item.id) } }>modifier</button></td>
                            <td><button className="btn btn-danger" onClick={() => { handleDelete(item.id) } }>supprimer</button></td>
                          </tr>
                        )
                    }
                </Fragment>
              </tbody>
            </Fragment>
          </table> */}
      </div>
    )
  }
  export default TabSection;