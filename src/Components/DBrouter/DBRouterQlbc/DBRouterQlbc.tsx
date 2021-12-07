import React from 'react'
import './DBrouterQlbc.css';
import TopSidebar from '../../TopbarV/Topbar';
import Sidebar from '../../Sidebar/Sidebar';
import DBQuanlbc from '../../Dashboard/DBQlbc/DBQlbc';
import SBQLCB from '../../Sidebar/SBQLCB/SBQLCB'

export default function DBRouterQlbc() {
    return (
        <div className="tsb">
            <TopSidebar />
            <div className="sb">
                <SBQLCB />
                <DBQuanlbc />
            </div>
            
        </div>
    )
}
