import React from 'react'
import './DBRouterQLND_Add.css';
import TopSidebar from '../../TopbarV/Topbar';
import Sidebar from '../../Sidebar/Sidebar';
import DBQLND_Add from '../../Dashboard/DBQLND_Add/DBQLND_Add';
import SBQLND from '../../Sidebar/SBQLND/SBQLND';
export default function DBRouterQLND_Add() {
    return (
        <div className="RTQLNDmot">
            <TopSidebar />
            <div className="RTQLNDhai">
                <SBQLND />
                <DBQLND_Add />
            </div>
            
        </div>
    )
}
