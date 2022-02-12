import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Testimonial.css";
import homepage from "../../img/Testimonial/homepage.png";
import homepage2 from "../../img/Testimonial/HOMEPAGE2.png";
import homepage3 from "../../img/Testimonial/Home-page3.png";
import loginPage from "../../img/Testimonial/Login-page.png";
import SignUpPage from "../../img/Testimonial/Signup-page2.png";
import mockup from "../../img/Testimonial/dashboard.png";
import crypto from "../../img/Testimonial/crypto.jpg";
import wireframe from "../../img/Testimonial/wireframe.jpeg";
import mockup2 from "../../img/Testimonial/DONATE-NOW.png";
import mockup3 from "../../img/Testimonial/EXPLODE.jpg";
import mockup4 from "../../img/Testimonial/game-graphics.jpg";
import mockup5 from "../../img/Testimonial/ToyCar.jpg";
import mockup6 from "../../img/Testimonial/Poster-01.jpg";
import mockup7 from "../../img/Testimonial/TWITTER-BANNER.jpg";
import mockup8 from "../../img/Testimonial/workshopp.jpg";
import mockup9 from "../../img/Testimonial/thumbnail-2.jpg";
import mockup10 from "../../img/Testimonial/thumbnail2.jpg";
import mockup11 from "../../img/Testimonial/illus1.jpg";
import mockup12 from "../../img/Testimonial/illus2.jpg";
import mockup13 from "../../img/Testimonial/illus3.jpg";
import mockup14 from "../../img/Testimonial/logoT.jpg";
import mockup15 from "../../img/Testimonial/mockup15.jpg";
import mockup16 from "../../img/Testimonial/mockup16.jpg";
import mockup17 from "../../img/Testimonial/OUR-GOALS.png";
import mockup18 from "../../img/Testimonial/p2.jpg";
import mockup19 from "../../img/Testimonial/p3.jpg";
import mockup20 from "../../img/Testimonial/p4.jpg";
import mockup21 from "../../img/Testimonial/project2.png";
import mockup22 from "../../img/Testimonial/txt1.jpg";
import mockup23 from "../../img/Testimonial/txt2.jpg";
import mockup24 from "../../img/Testimonial/txt3.jpg";
import mockup25 from "../../img/Testimonial/txt4.jpg";
import mockup26 from "../../img/Testimonial/mockup26.jpg";
import mockup27 from "../../img/Testimonial/p1.jpg";
import mockup28 from "../../img/Testimonial/women.jpg";
import mockup29 from "../../img/Testimonial/mockup11.jpg";
import mockup30 from "../../img/Testimonial/GAME-LOGO.jpg";
import mockup31 from "../../img/Testimonial/mobile1.png";
import mockup32 from "../../img/Testimonial/mobile2.png";
import mockup33 from "../../img/Testimonial/ratings.png";
import shape from "../../img/Testimonial/shape-bg.png";
import {Link} from 'react-router-dom';

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <ScreenHeading
        title={"Projects"}
        subHeading={"KNOW MORE"}
      />
      <section className="testimonial-section" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}
            >
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      YelpCamp is the campground making website which allows different users to login and make different campgrounds at different places.
                      It displays the location of each campground in the map using mapbox.
                    </p>
                  </div>
                  <div className="client-info">
                    <h5>YELPCAMP</h5>
                   <a href="https://github.com/manekasingh05/WebProject-YelpCamp"><p>View Project</p></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      LooPHole is a search engine just like Google or yahoo which allows user to go through numerous data availabe online. It uses PHP in the backend and HTML, CSS in the front end.
                    </p>
                  </div>
                  <div className="client-info">
                    <h5>LOOPHOLE</h5>
                    <a href="https://github.com/manekasingh05/LooPHole-Search-Engine"><p>View Project</p></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      It is an E-commerce website with an aim to purchase different things online just like amazon and flipkart using stripe as payment methods.
                    </p>
                  </div>
                  <div className="client-info">
                    <h5>E-COMMERCE WEBSITE</h5>
                    <a href="https://github.com/manekasingh05/E-commerce-website"><p>View Project</p></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      M-Flix is a netflix clone with different features like adding favourie videos, selecting videos, subscription using paypal payment method similar to Netflix.
                    </p>
                  </div>
                  <div className="client-info">
                    <h5>M-Flix</h5>
                    <a href="https://github.com/manekasingh05/MFlix-NetflixClone"><p>View Project</p></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      File Search Engine is a c++ praject used for searching various words, letters or sentences in the entire Text file. It uses different data structures like Arrays, STL, Strings etc along with OOPs Concept and File Handling.
                    </p>
                  </div>
                  <div className="client-info">
                    <h5>FILE SEARCH ENGINE</h5>
                    <a href="https://github.com/manekasingh05/mini-project-DSA"><p>View Project</p></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      Snake, Water, Gun is a simple C Project which allows user to play with the computer just like scissors, paper and rock.
                    </p>
                  </div>
                  <div className="client-info">
                    <h5>SNAKE WATER GUN</h5>
                    <a href="https://github.com/manekasingh05/Mini-project/blob/main/snake-water-gun.c"><p>View Project</p></a>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <section className="testimonial-section" id={props.id || ""}>
        <div className="container mb-3">
          <div className="row">
          <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}
            >
               <div className="col-lg-12">
                <div className="testi-item">
               <img src={homepage} alt="no internet connection"></img>
               </div>
               </div>
               <div className="col-lg-12">
                <div className="testi-item">
               <img src={homepage2} alt="no internet connection"></img>
               </div>
               </div>
               <div className="col-lg-12">
                <div className="testi-item">
               <img src={homepage3} alt="no internet connection"></img>
               </div>
               </div>
               <div className="col-lg-12">
                <div className="testi-item">
               <img src={loginPage} alt="no internet connection"></img>
               </div>
               </div>
               <div className="col-lg-12">
                <div className="testi-item">
               <img src={SignUpPage} alt="no internet connection"></img>
               </div>
               </div>
               <div className="col-lg-12">
                <div className="testi-item">
               <img src={wireframe} alt="no internet connection"></img>
               </div>
               </div>
               <div className="col-lg-12">
                <div className="testi-item">
               <img src={mockup} alt="no internet connection"></img>
               </div>
               </div>
               <div className="col-lg-12">
                <div className="testi-item">
               <img src={mockup2} alt="no internet connection"></img>
               </div>
               </div>
               <div className="col-lg-12">
                <div className="testi-item">
               <img src={crypto} alt="no internet connection"></img>
               </div>
               </div>
               <div className="col-lg-12">
                <div className="testi-item">
               <img src={mockup3} alt="no internet connection"></img>
               </div>
               </div>
               <div className="col-lg-12">
                <div className="testi-item">
               <img src={mockup4} alt="no internet connection"></img>
               </div>
               </div>
               <div className="col-lg-12">
                <div className="testi-item">
               <img src={mockup5} alt="no internet connection"></img>
               </div>
               </div>
               <div className="col-lg-12">
                <div className="testi-item">
               <img src={mockup6} alt="no internet connection"></img>
               </div>
               </div>
               <div className="col-lg-12">
                <div className="testi-item">
               <img src={mockup7} alt="no internet connection"></img>
               </div>
               </div>
               <div className="col-lg-12">
                <div className="testi-item">
               <img src={mockup8} alt="no internet connection"></img>
               </div>
               </div>
               <div className="col-lg-12">
                <div className="testi-item">
               <img src={mockup9} alt="no internet connection"></img>
               </div>
               </div>
               <div className="col-lg-12">
                <div className="testi-item">
               <img src={mockup10} alt="no internet connection"></img>
               </div>
               </div>
               <div className="col-lg-12">
                <div className="testi-item">
               <img src={mockup11} alt="no internet connection"></img>
               </div>
               </div>
               <div className="col-lg-12">
                <div className="testi-item">
               <img src={mockup12} alt="no internet connection"></img>
               </div>
               </div>
               <div className="col-lg-12">
                <div className="testi-item">
               <img src={mockup13} alt="no internet connection"></img>
               </div>
               </div>
               <div className="col-lg-12">
                <div className="testi-item">
               <img src={mockup14} alt="no internet connection"></img>
               </div>
               </div>
               <div className="col-lg-12">
                <div className="testi-item">
               <img src={mockup15} alt="no internet connection"></img>
               </div>
               </div>
               <div className="col-lg-12">
                <div className="testi-item">
               <img src={mockup16} alt="no internet connection"></img>
               </div>
               </div>
               <div className="col-lg-12">
                <div className="testi-item">
               <img src={mockup17} alt="no internet connection"></img>
               </div>
               </div>
               <div className="col-lg-12">
                <div className="testi-item">
               <img src={mockup18} alt="no internet connection"></img>
               </div>
               </div>
               <div className="col-lg-12">
                <div className="testi-item">
               <img src={mockup19} alt="no internet connection"></img>
               </div>
               </div>
               <div className="col-lg-12">
                <div className="testi-item">
               <img src={mockup20} alt="no internet connection"></img>
               </div>
               </div>
               <div className="col-lg-12">
                <div className="testi-item">
               <img src={mockup21} alt="no internet connection"></img>
               </div>
               </div>
               <div className="col-lg-12">
                <div className="testi-item">
               <img src={mockup22} alt="no internet connection"></img>
               </div>
               </div>
               <div className="col-lg-12">
                <div className="testi-item">
               <img src={mockup23} alt="no internet connection"></img>
               </div>
               </div>
               <div className="col-lg-12">
                <div className="testi-item">
               <img src={mockup24} alt="no internet connection"></img>
               </div>
               </div>
               <div className="col-lg-12">
                <div className="testi-item">
               <img src={mockup25} alt="no internet connection"></img>
               </div>
               </div>
               <div className="col-lg-12">
                <div className="testi-item">
               <img src={mockup26} alt="no internet connection"></img>
               </div>
               </div>
               <div className="col-lg-12">
                <div className="testi-item">
               <img src={mockup27} alt="no internet connection"></img>
               </div>
               </div>
               <div className="col-lg-12">
                <div className="testi-item">
               <img src={mockup28} alt="no internet connection"></img>
               </div>
               </div>
               <div className="col-lg-12">
                <div className="testi-item">
               <img src={mockup29} alt="no internet connection"></img>
               </div>
               </div>
               <div className="col-lg-12">
                <div className="testi-item">
               <img src={mockup30} alt="no internet connection"></img>
               </div>
               </div>
               <div className="col-lg-12">
                <div className="testi-item">
               <img src={mockup31} alt="no internet connection"></img>
               </div>
               </div>
               <div className="col-lg-12">
                <div className="testi-item">
               <img src={mockup32} alt="no internet connection"></img>
               </div>
               </div>
               <div className="col-lg-12">
                <div className="testi-item">
               <img src={mockup33} alt="no internet connection"></img>
               </div>
               </div>
               </OwlCarousel>
          </div>
          </div>
          </section>
      <div className="footer-image">
        <img src={shape} alt="image not responding" />
      </div>
    </div>
  );
}
