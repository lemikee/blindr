import React from "react";
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
      <div className="splash">
        <ModalContainer />
        <div className="splash-nav">
          <div className="logo">Blindr</div>
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
        <div className="hero-section">
          <div className="hero-image">
            <h1 className="hero-text">Swipe to Get Hired!</h1>
          </div>
        </div>
      </div>
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
              Our mission at blindr is to match you with the best software
              engineering jobs based off of what really matters - your skills.
              Our employer partners are blind to everything but your skills and
              credenitals. Nothing else is taken into consideration when you're
              matching with employers.
            </p>
          </div>
        </div>
      </div>

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
            with employers without ever leaving the app. We don't get paid until you get matched, so your interests are aligned with yours!
          </p>
        </div>
        </div>
      </div>










    
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SplashPage);
