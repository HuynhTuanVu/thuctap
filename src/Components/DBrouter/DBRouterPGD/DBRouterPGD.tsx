import React from 'react'
import './DBRouterPGD.css';
import TopSidebar from '../../TopbarV/Topbar';
import Sidebar from '../../Sidebar/Sidebar';
import DBPGD from '../../Dashboard/DBPGD/DBPGD';

export default function DBRouterQLCB() {
    return (
        <div className="tsb">
            <TopSidebar />
            <div className="sb">
                <Sidebar />
                <DBPGD />
            </div>
            
        </div>
    )
}
