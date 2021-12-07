import React from 'react'
import './DBRouterQTC_Add.css';
import TopSidebar from '../../TopbarV/Topbar';
import Sidebar from '../../Sidebar/Sidebar';
import DBQTC_Add from '../../Dashboard/DBQTC_them/DBQTC_them';
import SBQTC from '../../Sidebar/SBQTC/SBQTC';
export default function DBRouterQTC_Add() {
    return (
        <div className="QTCADD">
            <TopSidebar />
            <div className="QTCADD1">
                <SBQTC />
                <DBQTC_Add />
            </div>
            
        </div>
    )
}
