import React, { Component } from 'react';
import { connect } from 'react-redux';

class HangGhe extends Component {

    renderGhe = () => {
        if (!this.props.hangGhe.hang) {
            return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
                return <button className='rowNumber' key={index}>
                    {ghe.soGhe}
                </button>
            })
        } else {
            return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
                let cssGheDaDat = '';
                let cssDisable = false;
                let cssGheDangChon = '';
                if (ghe.daDat) {
                    cssGheDaDat = 'gheDuocChon';
                    cssDisable = true;
                } else if (
                    this.props.danhSachGheDangChon.find(gheDangChon => gheDangChon.soGhe === ghe.soGhe)
                ) {
                    cssGheDangChon = 'gheDangChon';
                }
                return <button
                    className={`ghe ${cssGheDaDat} ${cssGheDangChon}`}
                    disabled={cssDisable}
                    key={index}
                    onClick={() => {
                        this.props.chonGhe(ghe)
                    }}>
                    {ghe.soGhe}
                </button>
            })
        }
    }

    render() {
        return (
            <div className='text-light text-right' style={{ width: '80%', margin: '0 auto' }}>
                <div className='my-1 mr-3'>
                    <span className='firstChar'>{this.props.hangGhe.hang}</span>
                    <span>{this.renderGhe()}</span>
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
        chonGhe: (ghe) => {
            dispatch({
                type: 'CHON_GHE',
                payload: ghe,
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);