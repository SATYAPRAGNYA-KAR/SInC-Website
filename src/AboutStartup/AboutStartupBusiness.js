import React from 'react'
// import { Link } from 'react-router-dom'
import './AboutStartupSummary.css'
import activities from './Images/activities.png'
import resources from './Images/resources.png'
import value from './Images/value.png'
import partners from './Images/partners.png'


function Business() {
    return (
        <div>
            <div className="Content">
                <div className="Card" >
                    <div className="img">
                        <img src={partners} alt="Logo" style={{ height: '140px', width: '140px' }} />
                    </div>
                    <div className="Card-Topic" >
                        Key Partners
                    </div>
                </div>
                <div className="Card" >
                    <div className="img">
                        <img src={activities} alt="Logo" style={{ height: '140px', width: '140px' }} />
                    </div>
                    <div className="Card-Topic" >
                        Key Activities
                    </div>
                </div>
                <div className="Card" >
                    <div className="img">
                        <img src={value} alt="Logo" style={{ height: '140px', width: '140px' }} />
                    </div>
                    <div className="Card-Topic" >
                        Value Proposition
                    </div>
                </div>
                <div className="Card" >
                    <div className="img">
                        <img src={resources} alt="Logo" style={{ height: '140px', width: '140px' }} />
                    </div>
                    <div className="Card-Topic" >
                        Key Resources
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Business
