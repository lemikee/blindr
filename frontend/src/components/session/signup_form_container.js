import { connect } from 'react-redux';
import { clearErrors, loginEmployer, signup } from '../../actions/session_actions';
import { login } from '../../actions/session_actions';

import SignupForm from './signup_form';

const mapStateToProps = (state) => {
    return {
        signedIn: state.session.isSignedIn,
        errors: state.errors.session,
        currentUser: state.session.user,
        formType: 'Sign Up'
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      signup: (user, history) => dispatch(signup(user, history)),
      loginDemo: () =>
        dispatch(login({ email: "demo-user@gmail.com", password: "123456" })),
      clearErrors: () => dispatch(clearErrors()),
      loginEmployer: () => dispatch(loginEmployer({ email: "hire@us.com", password: "password"}))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);