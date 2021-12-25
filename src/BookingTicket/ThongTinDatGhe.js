import React, { Component } from 'react';
import { connect } from 'react-redux';

class ThongTinDatGhe extends Component {
    renderDanhSachGheDangChon = () => {
        return this.props.danhSachGheDangChon.map((ghe, index) => {
            return <tr key={index}>
                <td>{ghe.soGhe}</td>
                <td>{ghe.gia}</td>
                <td>
                    <button
                        className='text-danger bg-transparent btn'
                        style={{ fontSize: 25 }}
                        onClick={() => {
                            this.props.huyChonGhe(ghe);
                        }}>X</button>
                </td>
            </tr>
        })
    }

    render() {
        return (
            <div>
                <div className='row flex-column align-items-start my-5'>
                    <div className='col'>
                        <button className='gheDuocChon' style={{ height: '45px' }}></button><span className='text-light' style={{ fontSize: '30px', marginLeft: '10px' }}>Ghế đã đặt</span>
                    </div>
                    <div className='col'>
                        <button className='gheDangChon' style={{ height: '45px' }}></button><span className='text-light' style={{ fontSize: '30px', marginLeft: '10px' }}>Ghế đang chọn</span>
                    </div>
                    <div className='col'>
                        <button className='ghe' style={{ height: '45px', marginLeft: 0 }}></button><span className='text-light' style={{ fontSize: '30px', marginLeft: '10px' }}>Ghế chưa đặt</span>
                    </div>
                </div>

                <div>
                    <table className="table text-light" border="1">
                        <thead>
                            <tr style={{ fontSize: 30 }}>
                                <th>Số ghế</th>
                                <th>Giá</th>
                                <th>Hủy</th>
                            </tr>
                        </thead>
                        <tbody style={{ fontSize: 25 }}>
                            {this.renderDanhSachGheDangChon()}
                        </tbody>
                    </table>

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        danhSachGheDangChon: state.BookingTicketReducer.danhSachGheDangChon,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        huyChonGhe: (ghe) => {
            dispatch({
                type: 'BO_CHON_GHE',
                payload: ghe
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThongTinDatGhe);