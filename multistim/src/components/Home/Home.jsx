import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/home.scss'
import Table from './Table';


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

            <div className="universal-block">
                <div className="background gray"></div>
                <div className="universal-block-info">
                    <div className="universal-block-title">Our cutting-edge approach</div>
                    <div className="universal-block-sub">
                    Begins with virtual coil placement using cloud-based software, followed by the creation of a patient-specific coil guide using 3D printing technology. This coil guide ensures the accurate placement of the coil on the patient's head, providing you with the confidence that you are stimulating the right spot.
                    </div>
                    <div className="universal-block-btn">
                        <div className="learn-more">
                            <Link to='/more' className='learn-more-btn'>Learn more
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="universal-block-img">
                    <img src="/img/Home/img01.jpg" alt="img" />
                </div>
            </div>

            <div className="universal-block-revers">
                <div className="background black"></div>
                <div className="universal-block-revers-img">
                    <img src="/img/Home/img02.jpg" alt="img" />
                </div>
                <div className="universal-block-revers-info">
                    <div className="universal-block-revers-title">We are committed to advancing the field</div>
                    <div className="universal-block-revers-sub">
                    At Multistim, we are committed to advancing the field of neuro-navigation and providing our patients with the best possible care. Our state-of-the-art technology, combined with our team of highly skilled professionals, ensures that every patient receives personalized and effective treatment. With our technology, we aim to revolutionize the way TMS is performed, making it more efficient, accurate, and accessible than ever before.
                    </div>
                        <div className="block-revers-btn">
                        <Link to='/request' className='req-demo-btn block-revers-link'>Request a demo</Link>
                    </div>
                </div>
            </div>

            <div className="universal-block">
                <div className="background gray"></div>
                <div className="universal-block-info">
                    <div className="universal-block-title">Explore our website</div>
                    <div className="universal-block-sub">
                    Explore our website to learn more about our innovative technology and how it can help you or your loved ones. Contact us today to schedule a consultation with our team of experts and experience the difference that Multistim can make in your life.
                    </div>
                    <div className="universal-block-btn">
                        <div className="learn-more">
                            <Link to='/more' className='learn-more-btn'>Learn more
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="universal-block-img">
                    <img src="/img/Home/img03.jpg" alt="img" />
                </div>
            </div>

            <div className="why-block">
                <div className="why-block-header">
                    <div className="why-header-title">Why Choose Us</div>
                    <div className="why-header-sub">Lorem ipsum dolor sit amet consectetur. Viverra mauris vel in pharetra id. Ac suspendisse sodales amet fames pellentesque enim convallis sociis.</div>
                </div>
                <Table/>
            </div>
        </div>
    );
};

export default Home;