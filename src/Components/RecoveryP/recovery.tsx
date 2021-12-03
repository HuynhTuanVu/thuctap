import React from 'react';
import logo from '../../images/Login/Vector.png';
import pic1 from '../../images/Login/Frame 923.png';
import pic2 from '../../images/Login/Frame 924.png';
import pic3 from '../../images/Login/Frame 931.png';
import cayATM from '../../images/Login/Group.png';
import bongmo from '../../images/Login/bong.png';
import { Link } from 'react-router-dom';
import './recovery.css';



export default function Recovery() {
    return (
        <div className="Recovery">
            <div className="hinhdo1">
                <img src={logo} alt="" className="hinhdo" />
            </div>
            <div className="Content">
                <div className="Contentleft">
                    <img src={cayATM} alt="" className="caiatm" />
                    <img src={pic1} alt="" className="pic1" />
                    <img src={pic2} alt="" className="pic2" />
                    <img src={pic3} alt="" className="pic3" />
                    <img src={bongmo} alt="" className="bongatm" />
                    <p className="bgnho"></p>
                </div>
                <div className="Contentright">
                    <h1 className="NameRecovery">Khôi Phục Mật Khẩu</h1>
                    <form className="ContentText">
                        <br />
                        <label className="Text0" >Link khôi phục mật khẩu đã được gửi vào mail của bạn.</label><br />
                        <label className="Text1" >Vui lòng kiểm tra mail.</label><br />
                        <label className="Text2" >Click vào đường link để đặt lại mật khẩu.</label><br />
                        <br />
                    </form>
                    <Link to="/" className="link">
                        <p className="quaylaitrangemail"><u>Quay lại trang đăng nhập</u></p>
                    </Link>
                </div>
            </div>
        </div>
    )
}
