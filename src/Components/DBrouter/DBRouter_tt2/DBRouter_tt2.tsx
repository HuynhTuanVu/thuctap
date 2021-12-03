import React from 'react';
import './DBRouter_tt2.css';
import TopSidebar from '../../TopbarV/Topbar';
import Sidebar from '../../Sidebar/Sidebar';
import GGMap from '../../Dashboard/GGMap/Ggmap';
import DBtrangthai2 from '../../Dashboard/GGMap/DBtrangthai2/DBtrangthai2';

export default function DBRouter_tt2() {
    return (
        <div className='DBRTT_1'>
            <TopSidebar />
            <div className="DBRTT_2">
                <Sidebar />
                <DBtrangthai2 />
            </div>
            
        </div>
    )
}
