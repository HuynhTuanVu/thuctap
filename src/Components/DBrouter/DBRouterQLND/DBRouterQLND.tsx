import React from 'react'
import './DBRouterQLND.css';
import TopSidebar from '../../TopbarV/Topbar';
import Sidebar from '../../Sidebar/Sidebar';
import DBQLND from '../../Dashboard/DBQLND/DBQLND';
import SBQLND from '../../Sidebar/SBQLND/SBQLND';


export default function DBRouterQLND() {
    return (
        <div className="QLND3">
            <TopSidebar />
            <div className="QLND4">
                <SBQLND />
                <DBQLND />
            </div>
            
        </div>
    )
}
