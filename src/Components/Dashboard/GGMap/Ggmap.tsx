import React from 'react';
import Googlemap from '../../googlemap/gmap';
import './Ggmap.css';
import DBHgsm from '../../DBheader/DBHeaderGsm/DBHgsm';
import Tablegsm from '../../TableGSM/tableGSM';

export default function GGMap() {
    return (
        <div className="GGMap1">
            <DBHgsm />
            <Googlemap />
            <Tablegsm />

        </div>
    )
}