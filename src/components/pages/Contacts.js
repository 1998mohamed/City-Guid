import React, { Component } from 'react';
import { Link, Links } from 'react-router-dom';

class Contacts extends Component {
    render (){
    return (
        <section className="my-5">
            <div className="container">
                <div className="well well-sm">
                    <h3><strong>Our Location</strong></h3>
                </div>
            
            <div className="row">
                <div className="col-md-6">
                <iframe className="map" src="https://www.google.com/maps/d/u/0/embed?mid=1cC2b8-2HZih_ycQwUo-eoiANXntLXOdR" 
                 style={{
                     border: '0',
                     width: '100%',
                     height: '300px',
                     frameborder: '0'
                 }} allowFullScreen></iframe>
                </div>
              
                <div className="col-md-4">
                <div className="contact-text">
                    <h3><strong>Contact Us</strong></h3>
                </div>
                    <form className="form-contact">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Name" />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <input type="tel" className="form-control" placeholder="Phone" />
                        </div>
                        <textarea className="form-control" cols="30" row="23" placeholder="Message" />
                        <Link className="btn btn-outline-primary text-uppercase">
                            <i className="fa fa-paper-plane-o" aria-hidden="true" />
                            <i className="fab fa-telegram-plane">&nbsp;Send</i>
                        </Link>
                    </form>
                </div>
            </div>
            </div>
        </section>
    )
}
}
export default Contacts;