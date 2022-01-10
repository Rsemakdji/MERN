import React, {Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import Left from '../../components/sideBar/Left';
import Right from '../../components/sideBar/Right';

function Actu() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchDatas = async () => {
            const result = await axios.get('http://localhost:9001/api/actualites',
            );
            setData(result.data)
        };
        fetchDatas(); // on lance fetechdata ensuite on met les données dans data 
        console.log()

    }, [])


    return (


        <div className="container mt-3">
            <div className="row">
                <div className="col-2">
                    <Left></Left>
                </div>
                <div className="col-8 text-white">
                    <h1>tableau d'actualites </h1>
                    <hr className="my-5" />
                    <Fragment>
                        <ul>
                            {data.map(item => (

                                <li key={item.id}>
                                    <p><span className="badge bg-info">{item.title}</span></p>
                                    <p className="form-label mt-4">{item.description}</p>
                                    <br></br>
                                </li>
                            ))}
                        </ul>
                    </Fragment>
                    <hr className="my-5" />
                </div>
                <div className="col-2">
                    <Right></Right>

                </div>
            </div>
        </div>

    )
}

export default Actu;