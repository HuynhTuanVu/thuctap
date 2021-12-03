import React from 'react'
import DBContent from '../../DBContent/dbcontent';
import DBHYear from '../../DBheader/DBHeaderYear/DBHyear';
import './dbYear.css';


export default function DBYear() {
    return (
        <div className="DashBroadYear">
            <DBHYear />
            <DBContent />
        </div>
    )
}
