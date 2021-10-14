import { connect } from "react-redux";
import ProfileForm from "./profile_form";
import { updateProfile } from "../../../actions/user_actions"

const mapStateToProps = state => ({
  currentUser: state.session.user
});

const mapDispatchToProps = dispatch => ({
  updateProfile: (userId, profileData) => dispatch(updateProfile(userId, profileData))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);