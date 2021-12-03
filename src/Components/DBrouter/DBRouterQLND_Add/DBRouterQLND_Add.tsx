import React from 'react'
import './DBRouterQLND_Add.css';
import TopSidebar from '../../TopbarV/Topbar';
import Sidebar from '../../Sidebar/Sidebar';
import DBQLND_Add from '../../Dashboard/DBQLND_Add/DBQLND_Add';

export default function DBRouterQLND_Add() {
    return (
        <div className="RTQLNDmot">
            <TopSidebar />
            <div className="RTQLNDhai">
                <Sidebar />
                <DBQLND_Add />
            </div>
            
        </div>
    )
}
