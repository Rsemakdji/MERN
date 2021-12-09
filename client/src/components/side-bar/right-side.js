import React from 'react';

//image //
import actu from '../../images/actu.png';
import contact from '../../images/contact.png';

function RightSide() {
    return (
        <div className="row">
            <div className="col">
                <div className="card"><img src={actu} alt="" />
                    <a href="#">actualités</a>
                    <div className="card-body">
                    </div>
                </div>
            </div>
            <div className="w-100"></div>
            <div className="col">
                <div className="card"><img src={contact} alt="" />
                    <div className="card-body">
                    </div>
                </div>
                <a href="#">contactez-nous</a>
            </div>
        </div>

    )
}

export default RightSide;