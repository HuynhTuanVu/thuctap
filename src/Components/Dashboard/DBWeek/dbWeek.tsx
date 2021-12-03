import React from 'react';
import DBContent from '../../DBContent/dbcontent';
import DBHWeek from '../../DBheader/DBHearderWeek/DBHweek';
import './dbWeek.css';

export default function DBWeek() {
    return (
        <div className="DBW">
            <DBHWeek />
            <DBContent />
        </div>
    )
}
