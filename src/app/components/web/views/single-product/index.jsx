import React, { Component } from 'react'
import { Paper } from '@material-ui/core';
import Slider from "react-slick";
import parse from 'html-react-parser';
import { GetProductDetails } from '../../../services';
import Axios from 'axios';
import { addToCart } from '../../../../store/actions/cartActions';
import './index.css'
import product from '../product';
import { connect } from 'react-redux';
class Singleproduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jcvd: "string",
            product: {},
        }
    }
    async componentDidMount() {
        
        window.scrollTo(0, 0)
        let url = window.location.href.split('/');
        var lastSegment = url.pop() || url.pop();
        let d = lastSegment
        console.log(d)
        Axios.get(`https://webshop-darkwep.herokuapp.com/api/products/${d}`)
            .then(res => {
                console.log(res.data)
                this.setState({ product: res.data })
            })
    }
    render() {
        const  product  = this.state.product;
        const settings = {
            customPaging: function (i) {
                return (
                    <div id="sync1" className="owl-carousel">
                        <div className="item">
                            <img src={product.img} alt="pic" />
                        </div>
                    </div>
                );
            },
            dots: true,
            dotsClass: "slick-dots slick-thumb",
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        
        return (
            <div>
                <section className="pt-3 pb-3 page-info section-padding border-bottom bg-white single-product-header-bk">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <a href="/"><strong><span className="mdi mdi-home" /> Home</strong></a> <span className="mdi mdi-chevron-right" /> <a href="/shop/undefined">Weapons</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="shop-single section-padding pt-3">
                    <div className="container">
                        {
                            product ?
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="shop-detail-left">
                                        <img alt="pictur" src={product.img} className="img-fluid img-center" />
                                            {/* <Paper className="shop-detail-slider">
                                                <Slider {...settings}>
                                                    {
                                                        product.img ?
                                                            product.img.map((r, index) => {
                                                                return (
                                                                    <div key={index}>
                                                                        <img alt="pictur" src={r.imgUrl} className="img-fluid img-center" />
                                                                    </div>
                                                                )
                                                            })
                                                            : "Please Upload Image"
                                                    }

                                                </Slider>

                                            </Paper> */}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="shop-detail-right">
                                            
                                            <h2>{product.name}</h2>
                                            <h6><strong><span className="mdi mdi-approval" />in stock</strong></h6>
                                        

                                            <div className="pdp-product__new-price">
                                                <span className="space__right--2-unit">Selling price:</span>
                                                <span className="pdp-product__price--new">${product.price}</span>
                                                <div className="pdp-product__tax-disclaimer">(Inclusive of all taxes)</div>
                                            </div>
                                                                                                        
                                            <button type="button" className="btn btn-secondary btn-lg" onClick={() => this.props.addToCart(product)}><i className="mdi mdi-cart-outline" /> Add To Cart</button>
                                            <h6 className="mb-3 mt-4">Why shop from DarkWep ?</h6>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="feature-box">
                                                        <i className="mdi mdi-truck-fast" />
                                                        <h6 className="text-info"><span>Easy Returns &amp; Refunds</span></h6>
                                                        <p>Return products at doorstep and get refund in seconds.</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="feature-box">
                                                        <i className="mdi mdi-basket" />
                                                        <h6 className="text-info">Lowest price guaranteed</h6>
                                                        <p>Get difference refunded if you find it cheaper anywhere else.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="pdpt-bg">
                                            <div className="pdpt-title">
                                                <h4>Product Details</h4>
                                            </div>
                                            <div className="pdpt-body scrollstyle_4">
                                                <div className="pdct-dts-1 short-description">
                                                    {product.description}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                : "Loading"
                        }

                    </div>
                </section>

                {/* More like product */}

                {/* <Similarproduct /> */}
                {/* End Same product */}

            </div>
        )
    }
}

export default connect(null, { addToCart })(Singleproduct);

