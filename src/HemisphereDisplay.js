import React from "react";
import './hemisphere.css';
import northpic from './images/northern-hemisphere.png';
import southpic from './images/southern-hemisphere.png';

const hemisphereConfig ={
 Northern:{
    text: 'You are in the Northern Hemisphere',
    picture: northpic 
 },
 Southern:{
    text: 'You are in the Southern Hemisphere',
    picture: southpic 
 }     
}

const HemisphereDisplay = ({latitude}) =>{
    
    const hemsiphere = latitude > 0 ? 'Northern' : 'Southern';
    const {text, picture} = hemisphereConfig[hemsiphere]
    return (
        <div className={hemsiphere}>
            <div className="ui raised text container segment">
                <div className="image">
                    <img src={picture} alt="hemisphere picture" />
                </div>
                <div className="ui teal bottom attached label">
                    <h1>{text}</h1>
                </div>
            </div>
        </div>
    )
}

export default HemisphereDisplay; 