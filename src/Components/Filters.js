import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Program from './Program';

function Filters() {

    const [programs, setPrograms] = useState([]);
    const [year, setYear] = useState(0);
    const [launch, setLaunch] = useState(false);
    const [land, setLand] = useState(true);

    useEffect(()=>
    {
        getPrograms();
        // console.log('getPrograms');
    }, [])

    useEffect(()=>
    {
        if(year!==0) {
            getProgramsByYear();
            // console.log('getProgramsByYear');
        }
    }, [year, launch, land])

    const getPrograms = async () => {
        const response = await fetch(`https://api.spaceXdata.com/v3/launches?limit=100`);
        const data = await response.json();
        // console.log(data);
        setPrograms(data);
    }

    const getYear = (e) => {
        const launchYear = parseInt(e.target.innerText);
        setYear(launchYear);
        // console.log(year);
        // getProgramsByYear();
    }

    function isLaunchSuccess(e) {
        console.log(e.target.innerText == 'True');
        setLaunch(e.target.innerText == 'True');
        getProgramsByYear();
    }

    function isLandingSuccess(e) {
        setLand(e.target.innerText == 'True');
        getProgramsByYear();
    }

    const getProgramsByYear = async () => {
        const response = await fetch(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${launch}&land_success=&launch_year=${year}`);
        const data = await response.json();
        // console.log(data);
        setPrograms(data);
    };

    return (
        <div className='view'>
            <div className='filter'>
                <h3>Filters</h3>
                <div className="launch-year">
                    <p className='filter-para'>Launch Year</p>
                    <div className="btn-view">
                        <Link to='/2006' ><button className="btn" onClick={getYear} >2006</button></Link>
                        <Link to='/2007' ><button className="btn" onClick={getYear} >2007</button></Link>
                        <Link to='/2008' ><button className="btn" onClick={getYear} >2008</button></Link>
                        <Link to='/2009' ><button className="btn" onClick={getYear} >2009</button></Link>
                        <Link to='/2010' ><button className="btn" onClick={getYear} >2010</button></Link>
                        <Link to='/2011' ><button className="btn" onClick={getYear} >2011</button></Link>
                        <Link to='/2012' ><button className="btn" onClick={getYear} >2012</button></Link>
                        <Link to='/2013' ><button className="btn" onClick={getYear} >2013</button></Link>
                        <Link to='/2014' ><button className="btn" onClick={getYear} >2014</button></Link>
                        <Link to='/2015' ><button className="btn" onClick={getYear} >2015</button></Link>
                        <Link to='/2016' ><button className="btn" onClick={getYear} >2016</button></Link>
                        <Link to='/2017' ><button className="btn" onClick={getYear} >2017</button></Link>
                        <Link to='/2018' ><button className="btn" onClick={getYear} >2018</button></Link>
                        <Link to='/2019' ><button className="btn" onClick={getYear} >2019</button></Link>
                        <Link to='/2020' ><button className="btn" onClick={getYear} >2020</button></Link>
                    </div>
                </div>
                <div className="success-launch">
                    <p className='filter-para'>Successful Launch</p>
                    <div className="btn-view">
                        <button className="btn-links-tf" onClick={isLaunchSuccess}>True</button>
                        <button className="btn-links-tf" onClick={isLaunchSuccess}>False</button>
                    </div>
                </div>
                <div className="sucsess-land">
                    <p className='filter-para'>Successful Land</p>
                    <div className="btn-view">
                        <button className="btn-links-tf" onClick={isLandingSuccess}>True</button>
                        <button className="btn-links-tf" onClick={isLandingSuccess}>False</button>
                    </div>
                </div>
            </div>
            <div className="program-container">
                {
                    programs.map(program => (<Program key={program.mission_name} missionName={program.mission_name} missionId={program.mission_id} launchYear={program.launch_year} successfulLaunch={program.launch_success.toString()} flightNumber={program.flight_number} missionPatch={program.links.mission_patch} successfulLanding={(program.land_success)}/>))
                }
            </div>
        </div>    
    )
}

export default Filters
