import React from 'react'
import './DBRouterQTC.css';
import TopSidebar from '../../TopbarV/Topbar';
import Sidebar from '../../Sidebar/Sidebar';
import DBQTC from '../../Dashboard/DBQTC/DBQTC';
import SBQTC from '../../Sidebar/SBQTC/SBQTC';


export default function DBRouterQTC() {
    return (
        <div className="QTC6">
            <TopSidebar />
            <div className="QTC7">
                <SBQTC />
                <DBQTC />
            </div>
            
        </div>
    )
}
