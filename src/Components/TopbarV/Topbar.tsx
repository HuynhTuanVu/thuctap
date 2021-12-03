import React from 'react';
import './Topbar.css';
import VN from '../../images/dashboard/starVN.png';
import DropDown from '../../images/dashboard/Dropdown.png';
import Avatar from '../../images/dashboard/Avatar.png';

export default function TopSidebar() {
    return (
        <div className="Topbar">
            <div className="TopWrapper">
                    <div className="Topicons">
                <div className="TopRight">
                        <span className="TopLanguage">
                            <img src={VN} alt="" className="VN" />
                            <p className="Write">VNM</p>
                            <img src={DropDown} alt="" className="DropdownL" />
                        </span>
                        <span className="Namepic">
                            <img src={Avatar} alt="" className="PicAva" />
                            <p className="NAvta">Tuan Vu</p>
                            <img src={DropDown} alt="" className="DropDownPic" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
} 
