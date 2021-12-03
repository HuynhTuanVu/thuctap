import React from 'react'
import DashBoardContent from '../../DBContent/dbcontent';
import QLBC from '../../QLBC/Qlbc';
import TableQLCB from '../../TableQLbc/tableQLBC';
import './DBQlbc.css';


export default function DBQlcb() {
    return (
        <div className="Quanly">
            <QLBC />
            <TableQLCB/>
          
            
        </div>
    )
}