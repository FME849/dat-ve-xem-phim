import React, { Component, Fragment } from 'react';
import './BaiTapBookingTicket.css';
import ThongTinDatGhe from './ThongTinDatGhe';
import danhSachGhe from './../Data/danhSachGhe.json'
import HangGhe from './HangGhe';

export default class BookingTicket extends Component {

    renderHangGhe = () => {
        return danhSachGhe.map((hangGhe, index) => {
            return <Fragment key={index}>
                <HangGhe hangGhe={hangGhe} />
            </Fragment>
        })
    }

    render() {
        return (
            <div className='backgroundBookingTicket bookingMovie'>
                <div className='container-fluid position-relative'>
                    <div className='row'>
                        <div className='col-8 text-light text-center'>
                            <h1 className='my-3 text-warning'>ĐẶT VÉ XEM PHIM CYBERLEARN.VN</h1>
                            <h4>Màn hình</h4>
                            <div className='screen'></div>
                            {this.renderHangGhe()}
                        </div>
                        <div className='col-4'>
                            <h2 className='text-warning mt-3 mb-3 text-center'>
                                DANH SÁCH GHẾ BẠN CHỌN
                            </h2>
                            <ThongTinDatGhe />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
