import React from 'react';


//image //
import infos from '../../images/infos.png';
import calendrier from '../../images/calendrier.png';

function Left() {
    return (
        <div className="row">
            <div className="col">
                <div className="card"><img src={infos} alt="" />
                    <div className="card-body">
                    </div>
                </div>
                <a href="/Infos">Informations importantes</a>
            </div>
            <div className="w-100"></div>
            <div className="col">
                <div className="card"><img src={calendrier} alt=""/>
                    <div className="card-body">
                    </div>
                </div>
                <a href="/#">lien vers autre chose</a>
            </div>
        </div>

    )
}

export default Left;