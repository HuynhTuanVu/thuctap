import React from 'react'
import './dbcontent.css';
import Tstb from '../../images/dashboard/thietbi.png';
import ATM from '../../images/dashboard/picATM.png';
import Pgd from '../../images/dashboard/GiaoDich.png';
import KnnAC from '../../images/dashboard/Group 59.png';
import Dkn from '../../images/dashboard/Group 60.png';
import Bcb from '../../images/dashboard/Group 57.png';
import line from '../../images/dashboard/Line 6.png';
import nhiet from '../../images/contenticon/pic2.png';
import khoi from '../../images/contenticon/pic3.png';
import Rung from '../../images/contenticon/pic9.png';
import dichchuyen from '../../images/contenticon/pic12.png';
import rodien from '../../images/contenticon/pic4.png';
import cuatren from '../../images/contenticon/pic10.png';
import canhbaocuangoai from '../../images/contenticon/pic7.png';
import canhbaocuaket from '../../images/contenticon/pic8.png';
import baodongkhancap from '../../images/contenticon/pic1.png';
import baodongxamnhap from '../../images/contenticon/pic5.png';
import baodongtaicho from '../../images/contenticon/pic11.png';
import baodongquaGSM from '../../images/contenticon/pic6.png';
import canhbaokhoi from '../../images/contenticon/pic3.png';
import canhbaorung from '../../images/contenticon/pic9.png';
export default function DashBoardContent() {
    return (
        <div className="DBContent">
            <div className="DBC">
                <div className="DBCWLeft">
                    <div className="content">

                        {/* Tổng số thiết bị */}

                        <div className="tstb">
                            <img src={Tstb} alt="" />
                        </div>
                        <div className="tstbTitle">Tổng số thiết bị</div>
                        <div className="tstbTitle1"><b>4,052 </b>thiết bị</div>
                    </div>

                    {/* Line */}

                    <img src={line} alt="" className="lines" />

                    {/* ATM */}

                    <div className="ATM">
                        <div className="ATMIcon">
                            <img src={ATM} alt="" />
                        </div>
                        <div className="ATMTitle">ATM</div>
                        <div className="ATMTitle1"><b>1,021 </b>thiết bị</div>
                    </div>

                    {/* Line */}

                    <img src={line} alt="" className="lines1" />

                    {/* phòng giao dịch */}

                    <div className="phonggiaodich">
                        <div className="pgdicon">
                            <img src={Pgd} alt="" />
                        </div>
                        <div className="pgdTitle">Phòng giao dịch</div>
                        <div className="pgdTitle1"><b>1,432 </b>thiết bị</div>
                    </div>
                </div>

                {/* DBC Right */}

                <div className="DBCRight">
                    <div className="DBCRTitle">
                        Trạng thái thiết bị
                    </div>

                    {/* kết nối Nguồn AC */}

                    <div className="KnAC">
                        <div className="KnACTitle">
                            Kết nối nguồn AC
                        </div>
                        <img src={KnnAC} alt="" className="IconKnAC" />
                    </div>

                    {/* Line */}

                    <img src={line} alt="" className="lines2" />

                    {/* Đang Kết Nối */}

                    <div className="Kn">
                        <div className="KnTitle">
                            Đang kết nối
                        </div>
                        <img src={Dkn} alt="" className="IconKn" />
                    </div>

                    {/* Line */}

                    <img src={line} alt="" className="lines3" />

                    {/* bật cảnh báo */}

                    <div className="Cb">
                        <div className="CbTitle">
                            Bật cảnh báo
                        </div>
                        <img src={Bcb} alt="" className="IconCb" />
                    </div>
                </div>
            </div>
            <div className="under1">
                <div className="under1tieude">
                    Cảnh Báo ATM
                </div>
                <div className="khungnhiet">
                    <div className="nhietvachu">
                        <div className="nhiet">
                            Nhiệt
                        </div>
                        <div className="thietbi1">
                            235 thiết bị
                        </div>
                        <img src={nhiet} alt="" className="IconNhiet" />
                    </div>
                </div>
                <div className="khungkhoi">
                    <div className="khoivachu">
                        <div className="khoi">
                            Khói
                        </div>
                        <div className="thietbi2">
                            136 thiết bị
                        </div>
                        <img src={khoi} alt="" className="IconKhoi" />
                    </div>
                </div>
                <div className="khungrung">
                    <div className="rungvachu">
                        <div className="rung">
                            Rung
                        </div>
                        <div className="thietbi3">
                            123 thiết bị
                        </div>
                        <img src={Rung} alt="" className="IconRung" />
                    </div>
                </div>
                <div className="khungdichchuyen">
                    <div className="dichchuyenvachu">
                        <div className="dichchuyen">
                            Dịch Chuyển
                        </div>
                        <div className="thietbi4">
                            534 thiết bị
                        </div>
                        <img src={dichchuyen} alt="" className="Icondichchuyen" />
                    </div>
                </div>
                <div className="khungrodien">
                    <div className="rodienvachu">
                        <div className="rodien">
                            Rò Điện
                        </div>
                        <div className="thietbi5">
                            345 thiết bị
                        </div>
                        <img src={rodien} alt="" className="Iconrodien" />
                    </div>
                </div>
                <div className="khungcuatren">
                    <div className="cuatrenvachu">
                        <div className="cuatren">
                            Cửa Trên
                        </div>
                        <div className="thietbi6">
                            234 thiết bị
                        </div>
                        <img src={cuatren} alt="" className="Iconcuatren" />
                    </div>
                </div>
                <div className="khungcanhbaocuangoai">
                    <div className="canhbaocuangoaivachu">
                        <div className="canhbaocuangoai">
                            Cảnh Báo Cửa Ngoài
                        </div>
                        <div className="thietbi7">
                            486 thiết bị
                        </div>
                        <img src={canhbaocuangoai} alt="" className="Iconcanhbaocuangoai" />
                    </div>
                </div>
                <div className="khungcanhbaocuaket">
                    <div className="canhbaocuaketvachu">
                        <div className="canhbaocuaket">
                            Cảnh Báo Cửa Két
                        </div>
                        <div className="thietbi8">
                            486 thiết bị
                        </div>
                        <img src={canhbaocuaket} alt="" className="Iconcanhbaocuaket" />
                    </div>
                </div>
            </div>
            <div className="under2">
                <div className="under2tieude">
                    Cảnh báo phòng giao dịch
                </div>
                <div className="khungbaodongkhancap">
                    <div className="baodongkhancapvachu">
                        <div className="baodongkhancap">
                            Báo động khẩn cấp
                        </div>
                        <div className="thietbi9">
                            235 thiết bị
                        </div>
                        <img src={baodongkhancap} alt="" className="Iconbaodongkhancap" />
                    </div>
                </div>
                <div className="khungbaodongxamnhap">
                    <div className="baodongxamnhapvachu">
                        <div className="baodongxamnhap">
                            Báo động xâm nhập
                        </div>
                        <div className="thietbi10">
                            136 thiết bị
                        </div>
                        <img src={baodongxamnhap} alt="" className="Iconbaodongxamnhap" />
                    </div>
                </div>
                <div className="khungbaodongtaicho">
                    <div className="baodongtaichovachu">
                        <div className="baodongtaicho">
                            Báo động tại chỗ
                        </div>
                        <div className="thietbi11">
                            200 thiết bị
                        </div>
                        <img src={baodongtaicho} alt="" className="Iconbaodongtaicho" />
                    </div>
                </div>
                <div className="khungbaodongquaGSM">
                    <div className="baodongquagsmvachu">
                        <div className="baodongquagsm">
                            Báo động qua GSM
                        </div>
                        <div className="thietbi12">
                            223 thiết bị
                        </div>
                        <img src={baodongquaGSM} alt="" className="Iconbaodongquagsm" />
                    </div>
                </div>
                <div className="khungcanhbaokhoi">
                    <div className="canhbaokhoivachu">
                        <div className="canhbaokhoi">
                            Cảnh báo khói
                        </div>
                        <div className="thietbi13">
                            542 thiết bị
                        </div>
                        <img src={canhbaokhoi} alt="" className="Iconcanhbaokhoi" />
                    </div>
                </div>
                <div className="khungcanhbaorung">
                    <div className="canhbaorungvachu">
                        <div className="canhbaorung">
                            Cảnh báo rung
                        </div>
                        <div className="thietbi14">
                            278 thiết bị
                        </div>
                        <img src={canhbaorung} alt="" className="Iconcanhbaorung" />
                    </div>
                </div>
            </div>
        </div>
    )
}
