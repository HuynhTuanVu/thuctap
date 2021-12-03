import React from 'react'
import './DBRouterQTC_Add.css';
import TopSidebar from '../../TopbarV/Topbar';
import Sidebar from '../../Sidebar/Sidebar';
import DBQTC_Add from '../../Dashboard/DBQTC_them/DBQTC_them';

export default function DBRouterQTC_Add() {
    return (
        <div className="QTCADD">
            <TopSidebar />
            <div className="QTCADD1">
                <Sidebar />
                <DBQTC_Add />
            </div>
            
        </div>
    )
}
