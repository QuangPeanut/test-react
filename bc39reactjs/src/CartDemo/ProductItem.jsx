import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        let { sanPham } = this.props;
        return (
            <div className='card'>
                <img src={sanPham.hinhAnh} alt='...' />
                <div className='card-body'>
                    <h3>{sanPham.tenSP}</h3>
                    <p>{sanPham.giaBan}</p>
                    <button className='btn btn-success' data-toggle="modal" data-target="#modelId" onClick={() => { themGioHang(sanPham); }}>
                        Them vao gio hang <i className='fa fa-cart-plus'></i>
                    </button>
                </div>
            </div>
        )
    }
}
