import { connect } from "react-redux";
import ProfileForm from "./profile_form";
import { updateProfile, getProfile } from "../../../actions/user_actions"

const mapStateToProps = state => ({
  currentUser: state.session.user,
  userInfo: state.entities.user
});

const mapDispatchToProps = dispatch => ({
  updateProfile: (userId, profileData) => dispatch(updateProfile(userId, profileData)),
  getProfile: (userId) => dispatch(getProfile(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);