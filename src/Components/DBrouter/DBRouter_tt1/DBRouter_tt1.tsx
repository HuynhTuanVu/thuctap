import React from 'react';
import './DBRouter_tt1.css';
import TopSidebar from '../../TopbarV/Topbar';
import Sidebar from '../../Sidebar/Sidebar';
import GGMap from '../../Dashboard/GGMap/Ggmap';
import DBtrangthai1 from '../../Dashboard/GGMap/DBtrangthai1/DBtrangthai1';

export default function DBRouter_tt1() {
    return (
        <div className='DBRTT1'>
            <TopSidebar />
            <div className="DBRTT2">
                <Sidebar />
                <DBtrangthai1 />
            </div>
            
        </div>
    )
}
