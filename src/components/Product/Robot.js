import React from 'react';

const Robot = () => {
    return (
        <div>
            <img src={process.env.PUBLIC_URL + '/images/Robot.png'} alt="Robot" />
            <div>
                <ul>
                    <li>Robot</li>
                </ul>
            </div>
        </div>
    );
};

export default Robot;
