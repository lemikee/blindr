import React from 'react';
import { connect } from 'react-redux';
import ModalContainer from './modal/modal_container'
import { openModal } from '../actions/modal_actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  openModal: (modalType) => dispatch(openModal(modalType))
});


const SplashPage = (props) => {

    return (
        <div>
            <ModalContainer />
            <button onClick={() => props.openModal('signup')}>Trigger Modal</button>
            Blindr === Tinder 4 Jobs
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(SplashPage);