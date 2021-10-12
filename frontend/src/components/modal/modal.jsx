import React from 'react';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';

class Modal extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        if (!this.props.showModal) return null;
        
        return (
            <div>
            <div className='modal-back' onClick={this.props.closeModal}>
            </div>
            <div>
                {this.props.showModal === 'signup' ? <SignupFormContainer /> : <LoginFormContainer /> }
            </div>
            </div>
        );
    }
}

export default Modal;