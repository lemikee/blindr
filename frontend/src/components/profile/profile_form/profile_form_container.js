import { connect } from "react-redux";
import ProfileForm from "./profile_form";
import { updateProfile, getProfile } from "../../../actions/user_actions";
import { clearErrors } from '../../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    history: ownProps.history,
    currentUser: state.session.user,
    userInfo: state.entities.user,
    errors: state.errors.profile,
    formType: 'Create your profile'
  }
};

const mapDispatchToProps = dispatch => ({
  updateProfile: (userId, profileData) => dispatch(updateProfile(userId, profileData)),
  getProfile: (userId) => dispatch(getProfile(userId)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);