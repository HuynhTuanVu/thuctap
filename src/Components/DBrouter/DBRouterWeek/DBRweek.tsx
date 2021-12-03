import React from 'react'
import './DBRweek.css';
import TopSidebar from '../../TopbarV/Topbar';
import Sidebar from '../../Sidebar/Sidebar';
import DBWeek from '../../Dashboard/DBWeek/dbWeek';

export default function DBRweek() {
    return (
        <div className="WRouterWeek">
            <TopSidebar />
            <div className="WRouterWeek1">
                <Sidebar />
                <DBWeek />
            </div>

        </div>
    )
}
