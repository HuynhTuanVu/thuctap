import React from 'react'
import './DBRyear.css';
import TopSidebar from '../../TopbarV/Topbar';
import SiderBar from '../../Sidebar/Sidebar';
import DashBroadYear from '../../Dashboard/DBYear/dbYear';


export default function DBRouterYear() {
    return (
        <div className="WRouterYear">
            <TopSidebar />
            <div className="WRouterYear1">
                <SiderBar />
                <DashBroadYear />
            </div>
        </div>
    )
}
