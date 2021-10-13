import { connect } from "react-redux";
import ProfileForm from "./profile_form";
import { updateProfile } from "../../../actions/user_actions"

const mapStateToProps = state => ({
  userId: state.session.user.id
});

const mapDispatchToProps = dispatch => ({
  updateProfile: data => dispatch(updateProfile(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);