import React from 'react'
import './DBRouterQuanLCB.css';
import TopSidebar from '../../TopbarV/Topbar';
import Sidebar from '../../Sidebar/Sidebar';
import DBQlbc from '../../Dashboard/DBQlbc/DBQlbc';
import SBQLCB from '../../Sidebar/SBQLCB/SBQLCB';

export default function DBRouterQuanLCB() {
    return (
        <div className="tsb">
            <TopSidebar />
            <div className="sb">
                <SBQLCB />
                <DBQlbc />
            </div>
            
        </div>
    )
}
