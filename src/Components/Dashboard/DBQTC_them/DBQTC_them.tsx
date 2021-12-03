import React from 'react'
import './DBQTC_them.css';
import QTC_Add_table from '../../QTC_Add_Table/QTC_Add_Table';
import QTC_Add from '../../QTC_Them/QTC_Them';


export default function DBQTC_Add() {
    return (
        <div className="DBU2">
            <QTC_Add />
            <QTC_Add_table />
        </div>
    )
}
