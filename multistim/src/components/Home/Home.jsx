import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/home.scss'


const Home = () => {
    return (
        <div className='home__container'>
                <div className="welcome-multistim-block">
                <div className="background gradient"></div>

                    <div className="welcome-multistim-info">
                        <div className="welcome-multistim-title">Welcome 
                        to the world of Multistim 
                        </div>
                        <div className="welcome-multistim-sub">the innovative technology for neuronavigation in transcranial magnetic stimulation.
                        </div>
                        <div className="welcome-multistim-btn">
                            <div className="req-demo">
                                <Link to='/request' className='req-demo-btn  home-btn'>Request a demo</Link>
                            </div>
                        </div>
                    </div>
                    <div className="welcome-multistim-video">
                        <img src="/img/Home/Video-01.jpg" alt="video" />
                    </div>
                </div>
                <div className="cutting-edge-block">
                    <div className="background gray"></div>
                    <div className="cutting-edge-info">
                        <div className="cutting-edge-title">Our cutting-edge approach</div>
                        <div className="cutting-edge-sub">
                        begins with virtual coil placement using cloud-based software, followed by the creation of a patient-specific coil guide using 3D printing technology. This coil guide ensures the accurate placement of the coil on the patient's head, providing you with the confidence that you are stimulating the right spot.
                        </div>
                        <div className="cutting-edge-btn">
                            <div className="learn-more">
                                <Link to='/more' className='learn-more-btn'>Learn more
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="cutting-edge-img">img</div>
                </div>
        </div>
    );
};

export default Home;