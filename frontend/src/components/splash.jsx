import React from 'react';
import { connect } from 'react-redux';
import ModalContainer from './modal/modal_container'
import { openModal } from '../actions/modal_actions';
import { logout } from '../actions/session_actions';

const mapStateToProps = state => ({
    signedIn: state.session.isAuthenticated,
    modalType: state.ui.modal
});

const mapDispatchToProps = dispatch => ({
  openModal: (modalType) => dispatch(openModal(modalType)),
  logout: () => dispatch(logout())
});


const SplashPage = (props) => {

    return (
        <div className='splash'>
            <ModalContainer />
            <div className='splash-nav'>
                <div className='test'>Blindr === Tinder 4 Jobs</div>
                <div className='splash-btns'>
                    <button className={props.modalType === 'login'  ? 'splash-nav-btn-two clicked-two' : 'splash-nav-btn-two'} onClick={() => props.openModal('login')}>Log In</button>
                    <button className={props.modalType === 'signup' ? 'splash-nav-btn clicked' : 'splash-nav-btn '} onClick={() => props.openModal('signup')}>Sign Up</button>
                {props.signedIn ?
                    <button onClick={props.logout}>Logout</button> :
                    null}
                </div>
            </div>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(SplashPage);