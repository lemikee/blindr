import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import { login } from '../../actions/session_actions';

import SignupForm from './signup_form';

const mapStateToProps = (state) => {
    return {
        signedIn: state.session.isSignedIn,
        // errors: state.errors.session
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signup: user => dispatch(signup(user)),
        loginDemo: () => dispatch(login({email: 'demo-user@demo.com', password: '123456'}))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);