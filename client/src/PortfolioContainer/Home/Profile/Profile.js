import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="cols-icon">
              <a href="https://www.facebook.com/maneka.singh.562/">
                <i className="fa fa-facebook-square" />
              </a>
              <a href="https://github.com/manekasingh05">
                <i className="fa fa-github-square" />
              </a>
              <a href="https://www.instagram.com/_ms.designs___/">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://www.linkedin.com/in/maneka-singh-b887a0204/">
                <i className="fa fa-linkedin-square" />
              </a>
              <a href="https://twitter.com/SinghManeka">
                <i className="fa fa-twitter" />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hey, This is <span className="highlighted-text">MANEKA SINGH</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Full Stack Web Developer 💻",
                    1000,
                    "Android App Developer 📱",
                    1000,
                    "Competitive Programmer 💻",
                    1000,
                    "Graphic Designer 🔴",
                    1000,
                    "Freelancer 😎",
                    1000,
                    "ML & Open Source Enthusiast 🌐",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Learning and Exploring something new everyday is my passion.
            </span>
          </div>

          <div className="profile-options">
          <a href="#ContactMe"><button className="btn primary-btn"> Hire Me </button></a> 
            <a href="RESUME-MANEKA.pdf" download="Resume Maneka.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
