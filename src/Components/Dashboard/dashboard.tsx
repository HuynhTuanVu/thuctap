import React from 'react'
import './dashboard.css';
import DBContent from '../DBContent/dbcontent';
import DBHeader from '../DBheader/dbheader';
import Sidebar from '../Sidebar/SBQTC/SBQTC';

export default function DashBoard() {
    return (
        <div className="DashBoard">
            <DBHeader />
            <DBContent />
            
            
            
        </div>
    )
}
