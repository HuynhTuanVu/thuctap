import React from 'react';
import GoogleMap from '../../../googlemap/gmap';
import './DBtrangthai2.css';
import DBHgsm from '../../../DBheader/DBHeaderGsm/DBHgsm';
import Trangthai_googlemap2 from '../../../Trangthai_googlemap/Trangthai_googlemap2/Trangthai_googlemap2';

export default function trangthai2() {
    return (
        <div className="trangthaihai">
            <DBHgsm />
            <GoogleMap />
            <Trangthai_googlemap2 />

        </div>
    )
}