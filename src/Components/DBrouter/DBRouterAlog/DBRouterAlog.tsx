import React from 'react'
import './DBRouterAlog.css';
import TopSidebar from '../../TopbarV/Topbar';
import Sidebar from '../../Sidebar/Sidebar';
import DBAL from '../../Dashboard/DBAlog/DBAlog';
import SBAL from '../../Sidebar/SBAL/SBAL';

export default function DBRouterQLCB() {
    return (
        <div className="RAL">
            <TopSidebar />
            <div className="RAL1">
                <SBAL />
                <DBAL />
            </div>
            
        </div>
    )
}
