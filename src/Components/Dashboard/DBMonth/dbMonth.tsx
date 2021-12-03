import React from 'react';
import DBContent from '../../DBContent/dbcontent';
import DBHMonth from '../../DBheader/DBHearderMonth/DBHmonth';
import './dbMonth.css';

export default function DBMonth() {
    return (
        <div className="DBMonth">
            <DBHMonth />
            <DBContent />
            
        </div>
    )
}

