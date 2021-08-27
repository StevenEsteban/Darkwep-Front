import React, { Component } from 'react'
import { connect } from 'react-redux';
import { removeFromCart, incrementToCart, decreaseToCart } from "../../../../store/actions/cartActions";
class Cartsidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            grandTotal: '',toggle:false
        }
    }
    // handleHide(){
    //     this.setState({ toggle: !this.state.toggle})
    // }
    render() {
        const { cartItems } = this.props;
        return (
            <div>
                <span data-toggle="offcanvas" className="btn btn-link border-none"><i className="mdi mdi-cart" /> My Cart <small className="cart-value">{cartItems.length}</small></span>
                <div className="cart-sidebar">
                    <div className="bs-canvas-header side-cart-header p-3 ">
                        <div className="d-inline-block  main-cart-title">My Cart <span>({cartItems.length} Items)</span></div>
                        <button type="button" className="bs-canvas-close close" data-toggle="offcanvas"><i className="mdi mdi-close"></i></button>
                    </div>
                    <div className="cart-sidebar-body">
                        {
                            cartItems.map((row, index) => (
                                <div className="cart-item" key={index}>
                                    <div className="cart-product-img">
                                        <img className="img-fluid" src={row.img} alt="cart" />
                                    </div>
                                    <div className="cart-text">
                                        <h4>{row.name}</h4>
                                        <h4>{row.price}€</h4>
                                        <div className="qty-group">
                                            <div className="quantity buttons_added">
                                                <input type="button" defaultValue="-" className="minus minus-btn" onClick={() => this.props.decreaseToCart(row)} />
                                                <input type="number" value={row.qty} className="input-text qty text"/>
                                                <input type="button" defaultValue="+" className="plus plus-btn" onClick={() => this.props.incrementToCart(row)} />
                                                <button type="button" className="cart-close-btn" onClick={() => this.props.removeFromCart(row)}><i className="mdi mdi-close" /></button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="cart-sidebar-footer">
                        <div className="cart-store-details">
                            <p>Sub Total <strong className="float-right">
                            ${cartItems.reduce((sum, i) => (
                                    sum += i.qty * i.price
                                ), 0)}
                            </strong></p>
                            <p>Delivery Charges <strong className="float-right text-danger">Free</strong></p>
                            
                        </div>
                        <a href="/checkout"><button className="btn btn-secondary btn-lg btn-block text-left" type="button"><span className="float-left"><i className="mdi mdi-cart-outline" /> Proceed to Checkout </span><span className="float-right"><strong>
                        ${cartItems.reduce((sum, i) => (
                                sum += i.qty * i.price
                            ), 0)}
                        </strong> <span className="mdi mdi-chevron-right" /></span></button></a>
                    </div>
                </div>

            </div>
        )
    }
}

export default connect(
    (state) => ({
        cartItems: state.cart.cartItems,
    }),
    { incrementToCart, decreaseToCart, removeFromCart }
)(Cartsidebar);