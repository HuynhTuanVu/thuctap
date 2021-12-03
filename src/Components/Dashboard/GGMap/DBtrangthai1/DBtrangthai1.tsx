import React from 'react';
import Googlemap from '../../../googlemap/gmap';
import './DBtrangthai1.css';
import BDHgsm from '../../../DBheader/DBHeaderGsm/DBHgsm';
import Trangthai_GGmap1 from '../../../Trangthai_googlemap/Trangthai_googlemap1/Trangthai_googlemap1';

export default function trangthai1() {
    return (
        <div className="trangthaibai">
            <BDHgsm />
            <Googlemap />
            <Trangthai_GGmap1 />

        </div>
    )
}