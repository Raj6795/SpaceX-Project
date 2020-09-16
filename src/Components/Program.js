import React from 'react';
import '../App.css';

function Program({missionName, missionId, launchYear, successfulLaunch, flightNumber, missionPatch, successfulLanding}) {
    return (
        <div className='program'>
            <img src={missionPatch} alt={missionName} className='prog-img'/>
            <div className="left">
                <h4>{missionName}</h4>
                    <div className="mission-ids">
                        <p>Mission Ids: </p>
                        <ul>
                            {
                                missionId.forEach(id => (<li>{id.toString()}</li>))
                            }
                        </ul>
                    </div>
                    <p>Launch year: {launchYear}</p>
                    <p>Successful Launch: {successfulLaunch}</p>
                    <p>Successful Landing: {successfulLanding}</p>
            </div>
        </div>
    )
}

export default Program;
