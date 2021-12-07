import React from 'react'
import './Trangthai_googlemap2.css'
import Dot from '../../../images/dashboard/onedot.png';
import v1 from '../../../images/Ggmap/nhiet.png';
import v2 from '../../../images/Ggmap/rung.png';
import v3 from '../../../images/Ggmap/Frame 917.png';
import v4 from '../../../images/Ggmap/Frame 918.png';
import v5 from '../../../images/Ggmap/Frame 919.png';
import v6 from '../../../images/Ggmap/duphong.png';
import v7 from '../../../images/Ggmap/rung.png';
import v8 from '../../../images/Ggmap/dichchuyen.png';
import v9 from '../../../images/Ggmap/rodien.png';
import v10 from '../../../images/Ggmap/khoi.png';
import v11 from '../../../images/Ggmap/pinduphong.png';
import v12 from '../../../images/Ggmap/Frame.png';
import v13 from '../../../images/Ggmap/F.png';
import v14 from '../../../images/Ggmap/Frame 88uj6.png';
import v15 from '../../../images/Ggmap/GSM.png';
import v16 from '../../../images/Ggmap/Frame rf886.png';
import v17 from '../../../images/Ggmap/Frame 9.png';
export default function trangthai_GGmap2() {
    return (
        <div>
            <div className="thanhtrangthai2">
                <div className="thongtinatm1">
                    Thông tin ATM
                </div>
                <div className="table_MAP1">
                    <label className="ID_ttATM">ID: </label><br />
                    <label className="ID_ttATM_1">8628822201212 to SIM number: Unknown </label><br />
                    <br />
                    <label className="t1">Trạng thái: </label><br />
                    <div className="t1_t1_2">
                        <img src={Dot} alt="" className="onedot" />
                        <label className="t1_t1">Đang kết nối</label><br />
                    </div>
                    <br />
                    <label className="typeConnect">Loại kết nối</label>
                    <label className="typeConnect1">Nguồn AC - Mạng WAN</label>
                    <br />
                    <label className="typedevice">Loại thiết bị:</label>
                    <label className="typedevice1">Thiết bị cảnh báo cho phòng giao dịch</label>
                    <br />
                    <label className="trackingaddress">Địa chỉ theo dõi:</label>
                    <label className="trackingaddress1">86/33 Âu Cơ, phường 9, quận Tân Bình, TP.HCM</label>
                    <br />
                    <label className="activationdate">Ngày kích hoạt:</label>
                    <label className="activationdate1">12/05/2021 16:15:00</label>
                    <br />
                    <label className="timetable1">Thời gian truy vấn:  16:20:00 22/06/2021</label>
                </div>
                <div className="trangthaicambien">
                    Trạng thái cảm biến
                </div>
                <div className="table_MAP2">
                    <br />
                    <img src={v2} alt="" className="i1" />
                    <div className="s1_v2">Rung:</div>
                    <label className="s1_1_v2">Bình thường</label>
                    <br />
                    <br />
                    <img src={v6} alt="" className="i2" />
                    <div className="s2_v2">Dự phòng:</div>
                    <label className="s2_1_v2">Tắt</label>
                    <br />
                    <img src={v8} alt="" className="i3" />
                    <div className="s3">Dịch chuyển:</div>
                    <label className="s3_1">Bật</label>
                    <br />
                    <img src={v10} alt="" className="i4" />
                    <div className="s4">Khói:</div>
                    <label className="s4_1">Bật</label>
                    <br />
                    <img src={v14} alt="" className="i5" />
                    <div className="s5">Báo động tại chỗ:</div>
                    <label className="s5_1_v2">Bật</label>
                    <br />
                    <img src={v15} alt="" className="i6" />
                    <div className="s6">Báo động qua GSM:</div>
                    <label className="s6_1_v2">Bật</label>
                    <br />
                    <img src={v7} alt="" className="i7" />
                    <div className="s7_v2">Báo động qua GSM 2:</div>
                    <label className="s7_1_v2">Bật</label>
                    <br />
                </div>
                <div className="namecanhbao">
                    Cảnh báo
                </div>
                <div className="table_MAp4">
                    <img src={v9} alt="" className="i8" />
                    <div className="s8">Rò điện:</div>
                    <label className="s8_1_v2">Bình Thường</label>
                    <br />
                    <img src={v16} alt="" className="i9" />
                    <div className="s9">Khẩn cấp:</div>
                    <label className="s9_1_v2">Báo động</label>
                    <br />
                    <img src={v17} alt="" className="i10" />
                    <div className="s10">Xâm nhập:</div>
                    <label className="s10_1">Bật</label>
                    <br />
                    <img src={v11} alt="" className="i11" />
                    <div className="s11">Pin dự phòng:</div>
                    <label className="s11_1">Bật</label>
                    <br />
                    <img src={v12} alt="" className="i12" />
                    <div className="s12">Điện áp nguồn:</div>
                    <label className="s12_1">90 – 265 ± 5% VAC/50/60hz</label>
                    <br />
                    <img src={v13} alt="" className="i13" />
                    <div className="s13">Điện áp nguồn AC:</div>
                    <label className="s13_1">Còi hụ</label>
                    <br />
                    <img src={v12} alt="" className="i14" />
                    <div className="s14">Điện áp nguồn:</div>
                    <label className="s14_1">90 – 265 ± 5% VAC/50/60hz</label>
                    <br />
                </div>
            </div>
        </div>
    )
}
