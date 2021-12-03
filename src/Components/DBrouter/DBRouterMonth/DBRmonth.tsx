import React from 'react';
import './DBRmonth.css';
import TopSidebar from '../../TopbarV/Topbar';
import Sidebar from '../../Sidebar/Sidebar';
import DBMonth from '../../Dashboard/DBMonth/dbMonth';


export default function DBRmonth() {
    return (
        <div className="RouterMonth">
            <TopSidebar />
            <div className="RouterMonth1">
                <Sidebar />
                <DBMonth />
            </div>
        </div>
    )
}
