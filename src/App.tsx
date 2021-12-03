import React from 'react';
import './App.css';
import Login from './Components/Login/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import Password from './Components/Password/password';
import Recovery from './Components/RecoveryP/recovery';
import ComponentsRouter from './ComponentsRouter';
import DBRouterMap from './Components/DBrouter/DBRouterMap/DBRMap';
import DBRouterWeek from './Components/DBrouter/DBRouterWeek/DBRweek';
import DBRouterMonth from './Components/DBrouter/DBRouterMonth/DBRmonth';
import DBRouterYear from './Components/DBrouter/DBRouterYear/DBRyear';
import DBrouterPGD from './Components/DBrouter/DBRouterPGD/DBRouterPGD';
import DBrouterATM from './Components/DBrouter/DBRouterATM/DBRouterATM';
import DBRouterQuanLCB from './Components/DBrouter/DBRouterQuanLCB/DBRouterQuanLCB';
import DBRouterATM from './Components/DBrouter/DBRouterATM/DBRouterATM';
import trangthai_GGmap1 from './Components/Trangthai_googlemap/Trangthai_googlemap1/Trangthai_googlemap1';
import trangthai_GGmap2 from './Components/Trangthai_googlemap/Trangthai_googlemap2/Trangthai_googlemap2';
import DBRouter_tt1 from './Components/DBrouter/DBRouter_tt1/DBRouter_tt1';
import DBRouter_tt2 from './Components/DBrouter/DBRouter_tt2/DBRouter_tt2';
import DBRouterAlog from './Components/DBrouter/DBRouterAlog/DBRouterAlog';
import DBRouterQTC from './Components/DBrouter/DBRouterQTC/DBRouterQTC';
import DBRouterQTC_Add from './Components/DBrouter/DBRouterQTC_Add/DBRouterQTC_Add';
import DBRouterUpdate from './Components/DBrouter/DBRouterUpdate/DBRouterUpdate';
import DBRouterQLND from './Components/DBrouter/DBRouterQLND/DBRouterQLND';
import DBRouterQLND_Add from './Components/DBrouter/DBRouterQLND_Add/DBRouterQLND_Add';
import DBRouterQLND_Update from './Components/DBrouter/DBRouterQLND_Update/DBRouterQLND_Update';



function App() {
  return (
    <Router>
      <div className="index">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/password" element={<Password />} />
          <Route path="/Recovery" element={<Recovery />} />
          <Route path="/Router" element={<ComponentsRouter />} />
          <Route path="/gsmmap" element={<DBRouterMap />} />
          <Route path="/QLBC" element={<DBRouterQuanLCB />} />
          <Route path="/Week" element={<DBRouterWeek />} />
          <Route path="/Month" element={<DBRouterMonth />} />
          <Route path="/Year" element={<DBRouterYear />} />
          <Route path="/PGD" element={<DBrouterPGD />} />
          <Route path="/ATM" element={<DBrouterATM />} />
          <Route path="/WarningATM" element={<DBrouterPGD />} />
          <Route path="/BCATM" element={<DBRouterATM />} />
          <Route path="/trangthai1" element={<DBRouter_tt1 />} />
          <Route path="/trangthai2" element={<DBRouter_tt2 />} />
          <Route path="/ALog" element={<DBRouterAlog />} />
          <Route path="/QTC" element={<DBRouterQTC />} />
          <Route path="/Add" element={<DBRouterQTC_Add />} />
          <Route path="/Update" element={<DBRouterUpdate />} />
          <Route path="/QLND" element={<DBRouterQLND />} />
          <Route path="/QLNDU" element={<DBRouterQLND_Update />} />
          <Route path="/qlndadd" element={<DBRouterQLND_Add />} />
         

        </Routes>
      </div>
    </Router>
  );
}

export default App;
