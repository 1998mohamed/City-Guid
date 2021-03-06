import React from 'react';
import { reviews } from '../../data';
import { InfoConsumer } from '../context';
import Reviews from './Reviews';
function Details() {
    return (
        <InfoConsumer>
            {data => {
            const {
                id,
                headerTitle,
                headerSubTitle,
                headerText,
                img,
                title,
                maps,
                description
            } 
            = data.detailInfo; 

                return (
                    <React.Fragment>
                        <div className="container-fluid align-items-center">
                            <h1 className="display-1 font-weight-bold">{headerTitle}</h1>
                            <h4 className="display-5">{headerSubTitle}</h4>
                            <p>{headerText}</p>

                            <div className="container mt-5">
                                <div className="row justify-content-center">
                                   <div className="col-2">
                                    <i className="fab fa-facebook-f" />
                                   </div>
                                   <div className="col-2">
                                    <i className="fab fa-google-plus-g" />
                                   </div>
                                   <div className="col-2">
                                    <i className="fab fa-twitter" />
                                   </div>
                                   <div className="col-2">
                                    <i className="fab fa-reddit" />
                                   </div>
                                   <div className="col-2">
                                    <i className="fab fa-whatsapp" />
                                   </div>
                                   <div className="col-2">
                                    <i className="fab fa-facebook-messenger" />
                                   </div>
                                </div>
                            </div>
                        </div>


                        {/* Nav Link */}
                        <div className="container">
                            <ul className="nav nav-tabs">

                                {/* About Place Link */}
                                <li className="nav-item">
                                    <a href="#aboutPlace" className="nav-link active" role="tab"
                                    data-toggle="tab" >About Place</a>
                                </li>

                                {/* Reviews Link */}
                                <li className="nav-item">
                                    <a href="#reviews" className="nav-link" role="tab"
                                    data-toggle="tab">Reviews</a>
                                </li>
                                
                                {/* Map Link */}
                                <li className="nav-item">
                                    <a href="#map" 
                                    className="nav-link" 
                                    role="tab"
                                    data-toggle="tab">Map</a>
                                </li>
                            </ul>


                            {/* tab pane */}
                            <div className="tab-content mb-5">

                                {/* About Place Tab */}
                                <div id="aboutPlace" className="tab-pane in active text-center mt-5" role="tabpanel">
                                    <h2 className="mb-3">{title}</h2>
                                    <p>{description}</p>
                                    <img src={img} alt={title} className="img-thumbnail img-fluid" />
                                </div>  

                                {/* Reviews */}
                                <div className="tab-pane" id="reviews" role="tabpanel">
                                    <Reviews />
                                </div>

                                {/* Map */}
                                <div className="tab-pane" id="map" role="tabpanel">
                                    <iframe src={maps} style={{border:'0', height:'28.125rem', width:'100%', frameborder:'0'}} />
                                </div>

                            </div>
                        </div>
                    </React.Fragment>
                )
           }
            }
        </InfoConsumer>
    )
}
export default Details;