import React from 'react'
import './DBRouterCDTB.css';
import TopSidebar from '../../TopbarV/Topbar';
import DBCDTB_GSM from '../../Dashboard/DBCDTB_GSM/DBCDTB_GSM';
import SBQLTB_GSM from '../../Sidebar/SBQLTB_GSM/SBQLTB_GSM';

export default function DBRouterCDTB() {
    return (
        <div className="DBRCDTB">
            <TopSidebar />
            <div className="DBRCDTB1">
                <SBQLTB_GSM />
                <DBCDTB_GSM />
            </div>

        </div>
    )
}
