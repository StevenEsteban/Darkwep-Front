import React, { Component } from 'react'
import './index.css'
export default class Bestofferbanner extends Component {
    render() {
        return (
            <div>
                <div className="section145">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="main-title-tt">
                                    <div className="main-title-left">
                                        
                                        <h2>Limited</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <a href="#" className="best-offer-item">
                                    <img src="img/best-offers/offer-1.jpg" alt />
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <a href="#" className="best-offer-item">
                                    <img src="img/best-offers/offer-2.jpg" alt />
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <a href="#" className="best-offer-item offr-none">
                                    <img src="img/best-offers/offer-3.jpg" alt />
                                   
                                        
                                </a>
                            </div>
                            <div className="col-md-12">
                                <a href="#" className="code-offer-item">
                                    <img src="img/best-offers/offer-4.jpg" alt />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
