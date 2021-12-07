import React from 'react'
import './DBRouterATM.css';
import TopSidebar from '../../TopbarV/Topbar';
import Sidebar from '../../Sidebar/Sidebar';
import DBATM from '../../Dashboard/DBATM/DBATM';
import SBATM from '../../Sidebar/SBATM/SBATM'

export default function DBRouterATM() {
    return (
        <div className="ATM5">
            <TopSidebar />
            <div className="ATM6">
                <SBATM />
                <DBATM />
            </div>
            
        </div>
    )
}
