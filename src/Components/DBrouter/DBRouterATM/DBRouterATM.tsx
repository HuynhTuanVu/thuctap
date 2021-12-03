import React from 'react'
import './DBRouterATM.css';
import TopSidebar from '../../TopbarV/Topbar';
import Sidebar from '../../Sidebar/Sidebar';
import DBATM from '../../Dashboard/DBATM/DBATM';


export default function DBRouterATM() {
    return (
        <div className="ATM5">
            <TopSidebar />
            <div className="ATM6">
                <Sidebar />
                <DBATM />
            </div>
            
        </div>
    )
}
