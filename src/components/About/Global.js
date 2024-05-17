import React from 'react';

const Global = () => {
    return (
        <div>
            <h1>GLOBAL</h1>

            <h4>Trading company</h4>
            <h4>
                Enoch H.K <br /> International
            </h4>
            <img src={process.env.PUBLIC_URL + '/images/글로벌1.png'} alt="글로벌1"></img>

            <h4>R&D Manufacturer</h4>
            <h4>
                Shenzhen Enoch <br /> Technology
            </h4>
            <img src={process.env.PUBLIC_URL + '/images/글로벌2.png'} alt="글로벌2"></img>
        </div>
    );
};

export default Global;
