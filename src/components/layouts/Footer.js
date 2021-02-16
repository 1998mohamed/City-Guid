import React from 'react'
import styled from 'styled-components';
 function Footer() {
    return (
        <div className="footer">
            <div className="footer-middle">
            <div className="container">
                <div className="row">   
                    <div className="col-md-3 col-sm-6">
                        <h4>Lorem ipsum</h4>
                        <ul className="list">
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h4>Lorem ipsum</h4>
                        <ul className="list">
                            <li><a href="/">Lorem ipsum</a></li>
                            <li><a href="/">Lorem ipsum</a></li>
                            <li><a href="/">Lorem ipsum</a></li>
                            <li><a href="/">Lorem ipsum</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h4>Lorem ipsum</h4>
                        <ul className="list">
                            <li><a href="/">Lorem ipsum</a></li>
                            <li><a href="/">Lorem ipsum</a></li>
                            <li><a href="/">Lorem ipsum</a></li>
                            <li><a href="/">Lorem ipsum</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h4>Lorem ipsum</h4>
                        <ul className="list">
                            <li><a href="/">Lorem ipsum</a></li>
                            <li><a href="/">Lorem ipsum</a></li>
                            <li><a href="/">Lorem ipsum</a></li>
                            <li><a href="/">Lorem ipsum</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="text-xs-center">
                       &copy;{new Date().getFullYear()} City Guid App - All Rights Reserved
                    </p>
                </div>
            </div>    
            </div>  
            </div>         
    )
}

export default Footer;

