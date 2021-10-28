import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import LoginForm from "./login_form";
import { clearErrors } from "../../actions/session_actions";

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    formType: "Log In"
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user, history) => dispatch(login(user, history)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
