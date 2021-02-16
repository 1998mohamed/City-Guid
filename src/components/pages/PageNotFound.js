import { createRef } from "react";

import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class PageNotFound extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="error-template">
                            <h1>Ops!</h1>
                            <h2>Error 404 Not Found</h2>
                            <div className="error-details">
                                Sorry, an error occurred. The requested page was not found!
                            </div>
                            <div className="error-action">
                            <Link to="/Home" className="btn error btn-outline-primary btn-lg">
                                    <i className="fas fa-envelope" />
                                    &nbsp;Back To Main
                                </Link>
                                <Link className="btn error btn-outline-secondary btn-lg">
                                    <i className="fas fa-envelope" />
                                    &nbsp;Support
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default PageNotFound;
