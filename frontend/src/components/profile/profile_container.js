import { connect } from "react-redux";
import { getProfile } from "../../actions/user_actions";
import Profile from "./profile";
import { logout } from "../../actions/session_actions";


const mapStateToProps = state => ({
  currentUser: state.session.user,
  userInfo: state.entities.user
});

const mapDispatchToProps = dispatch => ({
  getProfile: (userId) => dispatch(getProfile(userId)),
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);