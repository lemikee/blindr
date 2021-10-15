import { connect } from "react-redux";
import ProfileForm from "./profile_form";
import { updateProfile, getProfile } from "../../../actions/user_actions"

const mapStateToProps = (state, ownProps) => {
  return {
    history: ownProps.history,
    currentUser: state.session.user,
    userInfo: state.entities.user,
    formType: 'Create your profile'
  }
};

const mapDispatchToProps = dispatch => ({
  updateProfile: (userId, profileData) => dispatch(updateProfile(userId, profileData)),
  getProfile: (userId) => dispatch(getProfile(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);