import React from 'react';
import logo from '../../images/Login/Vector.png';
import pic1 from '../../images/Login/Frame 923.png';
import pic2 from '../../images/Login/Frame 924.png';
import pic3 from '../../images/Login/Frame 931.png';
import cayATM from '../../images/Login/Group.png';
import bongmo from '../../images/Login/bong.png';
import { Link } from 'react-router-dom';
import './password.css';



export default function password() {
    return (
        <div className="password1">
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
                    <h1 className="NamePassword">Quên Mật Khẩu</h1>
                    <form className="ContentEmail">
                        <br />
                        <label className="TieuDeEmail" >Email</label><br />
                        <label className="textEmail" >Vui lòng nhập địa chỉ email để khôi phục mật khẩu</label><br />
                        <input type="text" className="DienEmail" name="Uname" placeholder="Nhập Email" />
                        <br />
                        <Link to="/Recovery" className="link">
                        <button type="button" className="btnlogin">
                            <p className="btndangnhap">Đăng Nhập</p>
                        </button>
                        </Link>
                    </form>
                    <Link to="/" className="link">
                        <p className="quaylaitrangdangnhap"><u>Quay lại trang đăng nhập</u></p>
                    </Link>
                </div>
            </div>
        </div>
    )
}
