import React from 'react'
import './DBQLTB_GSM.css';
import QTC_Add_table from '../../QTC_Add_Table/QTC_Add_Table';
import QTC_Add from '../../QTC_Them/QTC_Them';
import QLTB_GSM from '../../QLTB_GSM/QLTB_GSM';
import QLTB_GSM_table from '../../QLTB_GSM/QLTB_GSM_table/QLTB_GSM_table';


export default function DBQLTB_GSM1() {
    return (
        <div className="DBQLTB_GSM1">
            <QLTB_GSM />
            <QLTB_GSM_table />
            
        </div>
    )
}
