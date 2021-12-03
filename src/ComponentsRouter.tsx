import React from 'react'
import './ComponentsRouter.css';
import Topbar from './Components/TopbarV/Topbar'; 
import DashBoard from './Components/Dashboard/dashboard';
import Sidebar from './Components/Sidebar/Sidebar';
import Tablegsm from './Components/TableGSM/tableGSM';
import TableQLbc from './Components/TableQLbc/tableQLBC';
import TableATM from './Components/TableATM/TableATM';
import TableAlog from './Components/TableAlog/TableAlog';
import TableQTC from './Components/TableQTC/TableQTC';
import TableQLND from './Components/TableQLND/TableQLND';



export default function ComponentsRouter() {
    return (
        <div className="WrapperRouter">
         <Topbar />
            <div className="container">
                <Sidebar/>
                <DashBoard />
                

                
                
            </div>

        </div>
    )
}
