import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ModalContainer from "./modal/modal_container";
import { openModal } from "../actions/modal_actions";
import { logout } from "../actions/session_actions";

const mapStateToProps = (state) => ({
  signedIn: state.session.isAuthenticated,
  modalType: state.ui.modal,
});

const mapDispatchToProps = (dispatch) => ({
  openModal: (modalType) => dispatch(openModal(modalType)),
  logout: () => dispatch(logout()),
});

const SplashPage = (props) => {
  return (
    <div className="splash-container">
      <ModalContainer />
        <div className="splash-nav">
          <div className="splash-nav-left">
            <div className="logo">Blindr</div>
            <Link className="about-link" to="/about">About Us</Link>
          </div>

          <div className="splash-btns">
            {props.signedIn ? (
              <button className="splash-nav-btn" onClick={props.logout}>
                Logout
              </button>
            ) : (
              <div>
                <button
                  className={
                    props.modalType === "login"
                      ? "splash-nav-btn-two clicked-two"
                      : "splash-nav-btn-two"
                  }
                  onClick={() => props.openModal("login")}
                >
                  Log In
                </button>
                <button
                  className={
                    props.modalType === "signup"
                      ? "splash-nav-btn clicked"
                      : "splash-nav-btn "
                  }
                  onClick={() => props.openModal("signup")}
                >
                  Sign Up
                </button>
              </div>
            )}
          </div>
        </div>
      <div className="splash">
        
        <div className="hero-section">
          <div className="hero-image">
            <h1 className="hero-text">Swipe to Get Hired!</h1>
          </div>
        </div>
      </div>

      <div className="white-space" style={{backgroundColor: 'blue'}}></div>

      <div className="mission-container">
        <div className="mission-title-container">
          <h1 className="mission-title">Our Mission</h1>

          <div className="mission-statement">
            <p>Finding a job is hard, but it doesn't have to be.</p>
            <br />
            <p>
              The typical job search involves sending hundreds of applications
              to employers who may never see them. The process is tedious,
              inefficent, and inefficent. At blindr, we believe there's a better
              way.
            </p>
            <br />
            <p>
              Our mission at Blindr is to match you with the best software
              engineering jobs based off of what really matters - your skills.
              Our employer partners are blind to everything but your skills and
              credenitals. Nothing else is taken into consideration when you're
              matching with employers.
            </p>
          </div>
        </div>
      </div>
      <div className="white-space" style={{ backgroundColor: 'blue' }}></div>

      <div className="product-container">
        <div className="product-title-container">
          <h1 className="product-title">Our Product</h1>

          <div className="product-statement">
            <p>Finding a job with blindr is easy.</p>
            <br />
            <p>
              Simply create a profile with your skills and crendentials, swipe
              through a list of curated jobs made just for you, and match with
              employers. Our built in chat functionality allows your to connect
              with employers without ever leaving the app. We don't get paid
              until you get matched, so your interests are aligned with yours!
            </p>
          </div>
        </div>
      </div>

      <div className="splash-footer">
        <div className="about-col title">
          <h2>About</h2>
          <br />
          <p>
            blindr is a job matching application designed to streamline the job
            application process. It's quick and simple interface allows
            employers and applicants to match quickly and solely on what matter
            - the applicant's skills.
          </p>
          <br />
          <p>
            This project is built using the MERN stack for fast deployment.
            MongoDB and Express are used for the backend while React and Node
            are used for the frontend. This project is also built attop the many
            sleepless nights of{" "}
            <a href="https://www.linkedin.com/in/joseph-fernandez-5936716a/">
              Joey Fernandez
            </a>
            ,<a href="https://www.linkedin.com/in/mike-le/"> Mike Le</a>,
            <a href="https://www.linkedin.com/in/josh-kimbiggs/">
              {" "}
              Josh Kim-Biggs,
            </a>{" "}
            and <a href="https://www.linkedin.com/in/zhaojc/">Josh Zhao</a>.
          </p>
        </div>
        <div className="tech-col title">
          <h2>Technologies</h2>
          <br />
          <p>React</p>
          <p>Express</p>
          <p>MongoDB</p>
          <p>Node</p>
          <p>HTML</p>
          <p>CSS</p>
        </div>
        <div className="quick-col title">
          <h2>Quick Links</h2>
          <br />
          <Link to="/about">Meet the Team</Link>
          <a href="https://github.com/lemikee/blindr">Github Project Repo</a>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SplashPage);
