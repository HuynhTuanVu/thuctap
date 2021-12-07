import React from 'react'
import './DBRouterQLND_Update.css';
import TopSidebar from '../../TopbarV/Topbar';
import Sidebar from '../../Sidebar/Sidebar';
import DBQLND_Update from '../../Dashboard/DBQLND_Update/DBQLND_Update';
import SBQLND from '../../Sidebar/SBQLND/SBQLND';
export default function DBRouterQLND_Update() {
    return (
        <div className="DBQLND_Update">
            <TopSidebar />
            <div className="DBQLND_Update2">
                <SBQLND />
                <DBQLND_Update />
            </div>

        </div>
    )
}
