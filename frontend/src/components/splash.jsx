import React from 'react';
import { connect } from 'react-redux';
import ModalContainer from './modal/modal_container'
import { openModal } from '../actions/modal_actions';
import { logout } from '../actions/session_actions';

const mapStateToProps = state => ({
    signedIn: Object.keys(state.session.user).length !== 0
});

const mapDispatchToProps = dispatch => ({
  openModal: (modalType) => dispatch(openModal(modalType)),
  logout: () => dispatch(logout())
});


const SplashPage = (props) => {

    return (
        <div>
            <ModalContainer />
            <button onClick={() => props.openModal('login')}>Open Login</button>
            <button onClick={() => props.openModal('signup')}>Open Sign Up</button>
            Blindr === Tinder 4 Jobs
            {props.signedIn ? 
                <button onClick={props.logout}>Logout</button> :
                null}
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(SplashPage);