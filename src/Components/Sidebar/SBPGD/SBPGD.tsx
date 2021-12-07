import React from 'react'
import './SBPGD.css';
import pic0 from '../../../images/bentrai/Vector.png';
import pic1 from '../../../images/bentrai/group.png';
import pic2 from '../../../images/bentrai/grommet-icons_map-location.png';
import pic3 from '../../../images/bentrai/1.png';
import pic4 from '../../../images/bentrai/2.png';
import pic5 from '../../../images/bentrai/atm.png';
import pic6 from '../../../images/bentrai/role icon 1.png';
import pic7 from '../../../images/bentrai/3.png';
import pic8 from '../../../images/bentrai/user 1.png';
import pic9 from '../../../images/bentrai/history.png';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className="Sidebar">
            <div className="SidebarMenu">
                <div className="sidebarBG">
                    <div className="utube5">
                        <img src={pic0} alt="" className="IcSidebar" />
                    </div>
                </div>
                <p className="SbTittle">Tổng quan</p>
                <ul className="SbList">
                    <Link to="/router" className="link">
                        <li className="SbListItem" >
                            <img src={pic1} alt="" className="IconDB" />
                            DashBoard
                        </li>
                    </Link>
                    <Link to="/gsmmap" className="link">
                        <li className="SbListItem" >
                            <img src={pic2} alt="" className="IconDB" />
                            GSM  Modern On Map
                        </li>
                    </Link>
                    <Link to="/qlcb" className="link">
                        <li className="SbListItem" >
                            <img src={pic3} alt="" className="IconDB" />
                            Quản lý cảnh báo
                            <nav className="clrNoti">
                                <div className="sothongbao">12</div>
                            </nav>
                        </li>
                    </Link>
                </ul>
            </div>
            <div className="SidebarMenu">
                <p className="SbTittle">Báo cáo</p>
                <ul className="SbList">
                    <Link to="/PGD" className="link">
                        <li className="SbListItem active" >
                            <img src={pic4} alt="" className="IconDB" />
                            Báo cáo theo PGD
                        </li>
                    </Link>
                    <Link to="/ATM" className="link">
                        <li className="SbListItem">
                            <img src={pic5} alt="" className="IconDB" />
                            Báo cáo theo ATM
                        </li>
                    </Link>
                </ul>
            </div>
            <div className="SidebarMenu">
                <p className="SbTittle">Quản lý hệ thống</p>
                <ul className="SbList">
                    <Link to="/QTC" className="link">
                        <li className="SbListItem" >
                            <img src={pic6} alt="" className="IconDB" />
                            Quyền truy cập
                        </li>
                    </Link>
                    <Link to="/qltbgsm" className="link">
                        <li className="SbListItem" >
                            <img src={pic7} alt="" className="IconDB" />
                            Quản lý thiết bị GSM
                        </li>
                    </Link>
                    <Link to="/QLND" className="link">
                        <li className="SbListItem" >
                            <img src={pic8} alt="" className="IconDB" />
                            Quản lý người dùng
                        </li>
                    </Link>
                    <Link to="/ALog" className="link">
                        <li className="SbListItem">
                            <img src={pic9} alt="" className="IconDB" />
                            Audit log
                        </li>
                    </Link>
                </ul>
            </div>
        </div>

    )
}
