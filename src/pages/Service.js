import React from "react";
import {Link,useLocation} from 'react-router';

function Service() {
  return (
    <>



<div className="container-fluid page-header mb-5 py-5">
        <div className="container">
            <h1 className="display-3 text-white mb-3 animated slideInDown">About Us</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb text-uppercase">
                    <li className="breadcrumb-item"><Link to="/Home" className="text-white">Home</Link></li>
                    <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                    <li className="breadcrumb-item text-white active" aria-current="page">About</li>
                </ol>
            </nav>
        </div>
    </div>





    

    
    <div className="container-fluid py-5 px-4 px-lg-0">
        <div className="row g-0">
            <div className="col-lg-3 d-none d-lg-flex">
                <div className="d-flex align-items-center justify-content-center bg-primary w-100 h-100">
                    <h1 className="display-3 text-white m-0" style={{transform: 'rotate(-90deg)'}}>15 Years Experience</h1>
                </div>
            </div>
            <div className="col-md-12 col-lg-9">
                <div className="ms-lg-5 ps-lg-5">
                    <div className="text-center text-lg-start wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="text-secondary text-uppercase">Our Services</h6>
                        <h1 className="mb-5">Explore Our Services</h1>
                    </div>
                    <div className="owl-carousel service-carousel position-relative wow fadeInUp" data-wow-delay="0.1s">
                        <div className="bg-light p-4">
                            <div className="d-flex align-items-center justify-content-center border border-5 border-white mb-4" style={{width: '75px', height: '75px'}}>
                                <i className="fa fa-water fa-2x text-primary"></i>
                            </div>
                            <h4 className="mb-3">Drain Repair</h4>
                            <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.</p>
                            <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Quality Service</p>
                            <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Customer Satisfaction</p>
                            <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Support 24/7</p>
                            <a href="" className="btn bg-white text-primary w-100 mt-2">Read More<i className="fa fa-arrow-right text-secondary ms-2"></i></a>
                        </div>
                        <div className="bg-light p-4">
                            <div className="d-flex align-items-center justify-content-center border border-5 border-white mb-4" style={{width: '75px', height: '75px'}}>
                                <i className="fa fa-toilet fa-2x text-primary"></i>
                            </div>
                            <h4 className="mb-3">Toilet Pipe Repair</h4>
                            <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.</p>
                            <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Quality Service</p>
                            <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Customer Satisfaction</p>
                            <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Support 24/7</p>
                            <a href="" className="btn bg-white text-primary w-100 mt-2">Read More<i className="fa fa-arrow-right text-secondary ms-2"></i></a>
                        </div>
                        <div className="bg-light p-4">
                            <div className="d-flex align-items-center justify-content-center border border-5 border-white mb-4" style={{width: '75px', height: '75px'}}>
                                <i className="fa fa-shower fa-2x text-primary"></i>
                            </div>
                            <h4 className="mb-3">Sewer Line Repair</h4>
                            <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.</p>
                            <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Quality Service</p>
                            <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Customer Satisfaction</p>
                            <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Support 24/7</p>
                            <a href="" className="btn bg-white text-primary w-100 mt-2">Read More<i className="fa fa-arrow-right text-secondary ms-2"></i></a>
                        </div>
                        <div className="bg-light p-4">
                            <div className="d-flex align-items-center justify-content-center border border-5 border-white mb-4" style={{width: '75px', height: '75px'}}>
                                <i className="fa fa-tint fa-2x text-primary"></i>
                            </div>
                            <h4 className="mb-3">Water Heater Repair</h4>
                            <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.</p>
                            <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Quality Service</p>
                            <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Customer Satisfaction</p>
                            <p className="text-primary fw-medium"><i className="fa fa-check text-success me-2"></i>Support 24/7</p>
                            <a href="" className="btn bg-white text-primary w-100 mt-2">Read More<i className="fa fa-arrow-right text-secondary ms-2"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    


    <div className="container-fluid my-5 px-0">
        <div className="video wow fadeInUp" data-wow-delay="0.1s">
            <button type="button" className="btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                <span></span>
            </button>

            <div className="modal fade" id="videoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content rounded-0">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Youtube Video</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            
                            <div className="ratio ratio-16x9">
                                <iframe className="embed-responsive-item" src="" id="video" allowfullscreen allowscriptaccess="always"
                                    allow="autoplay"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h1 className="text-white mb-4">Emergency Plumbing Service</h1>
            <h3 className="text-white mb-0">24 Hours 7 Days a Week</h3>
        </div>
        <div className="container position-relative wow fadeInUp" data-wow-delay="0.1s" style={{marginTop: '-6rem'}}>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="bg-light text-center p-5">
                        <h1 className="mb-4">Book For A Service</h1>
                        <form>
                            <div className="row g-3">
                                <div className="col-12 col-sm-6">
                                    <input type="text" className="form-control border-0" placeholder="Your Name" style={{height: '55px'}}/>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <input type="email" className="form-control border-0" placeholder="Your Email" style={{height: '55px'}}/>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <select className="form-select border-0" style={{height: '55px'}}>
                                        <option selected>Select A Service</option>
                                        <option value="1">Service 1</option>
                                        <option value="2">Service 2</option>
                                        <option value="3">Service 3</option>
                                    </select>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <div className="date" id="date1" data-target-input="nearest">
                                        <input type="text"
                                            className="form-control border-0 datetimepicker-input"
                                            placeholder="Service Date" data-target="#date1" data-toggle="datetimepicker" style={{height: '55px'}}/>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <textarea className="form-control border-0" placeholder="Special Request"></textarea>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" type="submit">Book Now</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>



    
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
            <div className="text-center">
                <h6 className="text-secondary text-uppercase">Testimonial</h6>
                <h1 className="mb-5">Our Clients Say!</h1>
            </div>
            <div className="owl-carousel testimonial-carousel position-relative wow fadeInUp" data-wow-delay="0.1s">
                <div className="testimonial-item text-center">
                    <div className="testimonial-text bg-light text-center p-4 mb-4">
                        <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    </div>
                    <img className="bg-light rounded-circle p-2 mx-auto mb-2" src="assets/img/testimonial-1.jpg" style={{width: '80px', height: '80px'}}/>
                    <div className="mb-2">
                        <small className="fa fa-star text-secondary"></small>
                        <small className="fa fa-star text-secondary"></small>
                        <small className="fa fa-star text-secondary"></small>
                        <small className="fa fa-star text-secondary"></small>
                        <small className="fa fa-star text-secondary"></small>
                    </div>
                    <h5 className="mb-1">Client Name</h5>
                    <p className="m-0">Profession</p>
                </div>
                <div className="testimonial-item text-center">
                    <div className="testimonial-text bg-light text-center p-4 mb-4">
                        <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    </div>
                    <img className="bg-light rounded-circle p-2 mx-auto mb-2" src="assets/img/testimonial-2.jpg" style={{width: '80px', height: '80px'}}/>
                    <div className="mb-2">
                        <small className="fa fa-star text-secondary"></small>
                        <small className="fa fa-star text-secondary"></small>
                        <small className="fa fa-star text-secondary"></small>
                        <small className="fa fa-star text-secondary"></small>
                        <small className="fa fa-star text-secondary"></small>
                    </div>
                    <h5 className="mb-1">Client Name</h5>
                    <p className="m-0">Profession</p>
                </div>
                <div className="testimonial-item text-center">
                    <div className="testimonial-text bg-light text-center p-4 mb-4">
                        <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    </div>
                    <img className="bg-light rounded-circle p-2 mx-auto mb-2" src="assets/img/testimonial-3.jpg" style={{width: '80px',height: '80px'}}/>
                    <div className="mb-2">
                        <small className="fa fa-star text-secondary"></small>
                        <small className="fa fa-star text-secondary"></small>
                        <small className="fa fa-star text-secondary"></small>
                        <small className="fa fa-star text-secondary"></small>
                        <small className="fa fa-star text-secondary"></small>
                    </div>
                    <h5 className="mb-1">Client Name</h5>
                    <p className="m-0">Profession</p>
                </div>
                <div className="testimonial-item text-center">
                    <div className="testimonial-text bg-light text-center p-4 mb-4">
                        <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    </div>
                    <img className="bg-light rounded-circle p-2 mx-auto mb-2" src="assets/img/testimonial-4.jpg" style={{width: '80px', height: '80px'}}/>
                    <div className="mb-2">
                        <small className="fa fa-star text-secondary"></small>
                        <small className="fa fa-star text-secondary"></small>
                        <small className="fa fa-star text-secondary"></small>
                        <small className="fa fa-star text-secondary"></small>
                        <small className="fa fa-star text-secondary"></small>
                    </div>
                    <h5 className="mb-1">Client Name</h5>
                    <p className="m-0">Profession</p>
                </div>
            </div>
        </div>
    </div>
    
    </>
  );
}
export default Service;