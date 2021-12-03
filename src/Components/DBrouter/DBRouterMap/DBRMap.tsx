import React from 'react';
import './DBRMap.css';
import TopSidebar from '../../TopbarV/Topbar';
import Sidebar from '../../Sidebar/Sidebar';
import GGMap from '../../Dashboard/GGMap/Ggmap';
import Tablegsm from '../../TableGSM/tableGSM';
import DBHgsm from '../../DBheader/DBHeaderGsm/DBHgsm';
import Ggmap from '../../Dashboard/GGMap/Ggmap';

export default function DBRouterMap() {
    return (
        <div className='DGmap'>
            <TopSidebar />
            <div className="DGmap1">
                <Sidebar />
                <Ggmap />
            </div>

        </div>
    )
}
