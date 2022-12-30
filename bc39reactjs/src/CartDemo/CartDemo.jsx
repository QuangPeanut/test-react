import React, { Component } from 'react';
import Cart from './Cart';
import ProductList from './ProductList';

export default class CartDemo extends Component {

    state = {
        gioHang: [
            {
                maSP: 1, tenSP: "VinSmart Live",
                giaBan: 5700000, hinhAnh: "./images/vsphone.jpg",
                soLuong: 3,
            }
        ]
    }

    themGioHang = (prodClick) => {
        console.log(prodClick)
    }

    render() {
        return (
            <div className='container'>
                <Cart gioHang={this.state.gioHang} />
                <ProductList themGioHang={this.themGioHang} />
            </div>
        )
    }
}
