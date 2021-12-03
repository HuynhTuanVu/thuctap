import React from 'react';
import logo from '../../images/Login/Vector.png';
import pic1 from '../../images/Login/Frame 923.png';
import pic2 from '../../images/Login/Frame 924.png';
import pic3 from '../../images/Login/Frame 931.png';
import cayATM from '../../images/Login/Group.png';
import bongmo from '../../images/Login/bong.png';
import eye from '../../images/Login/eye.png';
import { Link } from 'react-router-dom';
import './Login.css';



export default function Login() {
    return (
        <div className="dangnhap">
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
                    <h3 className="NameLogin">Đăng nhập</h3>
                    <form className="Contentlogin">
                        <br />
                        <label className="tendangnhap">Tên Đăng Nhập</label><br />
                        <input type="text" className="taikhoan" name="Uname" placeholder="Nhập tài khoản" /><br />
                        <br />
                        <label htmlFor="tdn" className="matkhau">Mật Khẩu</label><br />
                        <input type="password" className="nhappass" name="pword" placeholder="Nhập mật khẩu" />
                        <img src={eye} alt="" className="eye"/>      
                        <br />
                        <br />
                        <input type="checkbox" className="chkpass" name="nhodangnhap"></input>
                        <label htmlFor="nhodangnhap" className="nhodangnhap"> Ghi nhớ đăng nhập</label><br />
                        <Link to="/Router" className="Link">
                        <button type="button" className="btnlogin">
                            <p className="btndangnhap">Đăng Nhập</p>
                        </button>
                        </Link>
                    </form>
                    <Link to="/password " className="link">
                            <p className="laymatkhau">
                                <u>Quên mật khẩu</u>
                            </p>
                    </Link>
                </div>
            </div>
        </div>
    )
}
