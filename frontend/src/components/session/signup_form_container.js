import { connect } from 'react-redux';
import { registerEmployer } from '../../actions/employer_actions';
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
      login: (user, history) => dispatch(login(user, history)),
      clearErrors: () => dispatch(clearErrors()),
      loginEmployer: () => dispatch(loginEmployer({ email: "demo@user.com", password: "123456"})),
      signupEmployer: (user) => dispatch(registerEmployer(user))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);