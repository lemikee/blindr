import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = (state) => {
    return {
        // errors: state.errors.session
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: user => dispatch(login(user)),
        loginDemo: () => dispatch(login({email: 'demo-user@demo.com', password: '123456'}))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);